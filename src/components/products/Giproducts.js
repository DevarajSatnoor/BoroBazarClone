import React, { useState, useEffect, useContext } from "react";
import { bucket } from "../../store/CreateStore";
import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import "../../styles/giproducts.css";

function Giproducts() {

  console.log("Giproducts mounted");
  // console.log('bucket',bucket)
  const [data, setData] = useContext(bucket);
  const [productData, setProductData] = useState(null);
  const { state } = useParams();
  console.log("state", state);
  // console.log('productData',productData)
  console.log("data", data);
  //
  useEffect(() => {
    if (data && state) {
      // Find the product data for the selected state
      // const stateData = data?.find(item => item.statename == state);
      const stateData = data?.filter(
        (item) => item?.statename === state?.toLocaleLowerCase()
      );
      console.log("stateData", stateData);
      if (stateData?.length > 0) {
        setProductData(stateData);
      } else {
        setProductData([]);
      }
    }
  }, [state, data]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);


  return (
 <div className="productdata">

  {productData?.length > 0 ? (
    <div className="productdat">
      {productData.map((product) => (
        product.gilist.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image">
              <img src={item?.image[0]?.imageurl} alt="" />
            </div>
            <div className="product-details">
              <p style={{ fontSize: "20px", fontWeight: 600 }}>
                {item.name}
              </p>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <div className="rating-container">
                <span className="rating-label">Rating:</span>
                <Rating
                  value={parseFloat(item.rating)}
                  precision={0.1}
                />
                ({item.rating})
              </div>
              <p>Sector: {item.sector}</p>
            </div>
          </div>
        ))
      ))}
    </div>
  ) : (
    <p>No products found for the selected state.</p>
  )}
</div>

  );
}

export default Giproducts;













{/* <div className="productdata">
{productData?.length > 0 ? (
  <div className="productdat">
    {productData?.map((product) => (
      <div key={product.id} className="product-card">
        <div className="product-image">
          <img src={product?.gilist[0]?.image[0]?.imageurl} alt="" />
      
        </div>
        <div className="product-details">
          <p style={{ fontSize: "20px", fontWeight: 600 }}>
            {product?.gilist[0]?.name}
          </p>
          <p>{product?.gilist[0]?.description}</p>
          <p>Price: {product?.gilist[0]?.price}</p>
          <div className="rating-container">
            <span className="rating-label">Rating:</span>
            <Rating
              value={parseFloat(product?.gilist[0]?.rating)}
              precision={0.1}
            />
            ({product?.gilist[0]?.rating})
          </div>
          <p>Sector: {product?.gilist[0]?.sector}</p>
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No products found for the selected state.</p>
)}
</div> */}
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/shopproduct.css";

// import '../../../styles/grocery.css'
import graphs from "../../assets/banner-7.webp";
import graphs1 from "../../assets/area-365.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import pic1 from "../../assets/iskii.png";
// import iski from "../../assets/iskii.png";
import iski1 from "../../assets/p-2.webp";
import iski2 from "../../assets/p-18.webp";
import iski3 from "../../assets/p-16.png";
import iski4 from "../../assets/p-13.png";
// import GroceryAdd from "../home/GroceryAdd";

function Shopproducts() {
  const [expanded, setExpanded] = useState(false);
  const [carts, setCarts] = useState(Array(10).fill(false));
  const [visible, setVisible] = useState(Array(10).fill(false));
  const [counts, setCounts] = useState(Array(10).fill(0));
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  const toggleButton = (index) => {
    const newCarts = [...carts];
    newCarts[index] = true;
    setCarts(newCarts);

    const newVisible = [...visible];
    newVisible[index] = true;
    setVisible(newVisible);
  };

  const removeCart = (index) => {
    const newCounts = [...counts];
    newCounts[index] = Math.max(counts[index] - 1, 0);
    setCounts(newCounts);

    if (counts[index] <= 0) {
      const newVisible = [...visible];
      newVisible[index] = false;
      setVisible(newVisible);

      const newCarts = [...carts];
      newCarts[index] = false;
      setCarts(newCarts);
    }
  };

  const addCart = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);

    const newVisible = [...visible];
    newVisible[index] = true;
    setVisible(newVisible);
  };

  const groceryItems = [
    {
      id: 1,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: pic1,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 2,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski1,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 3,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski2,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 4,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski3,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 5,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski4,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 2,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski1,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 3,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski2,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 4,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski3,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
      id: 5,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski4,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
  ];

  const handleExpand = () => {
    setExpanded(true);
  };

  const { id } = useParams();
  console.log("shopporud mounte with id ", id);
  return (
    <div className="shop-area-365-main">
      <div className="area365-banner-1">
        <img src={graphs} style={{ width: "100%", height: "300px" }} />
      </div>

      <div className="shop-area-365-below-banner-MAIN">
        <div className="area-365-below-banner-left-main">
          <div className="area365-below-banner-left-1">
            <img src={graphs1} />
            <h2>Area 365 mart</h2>
            <p>
              The grocery shop is the best shop around the city. Get groceries
              delivered.
            </p>
            {!expanded && (
              <span
                role="button"
                style={{
                  color: "#02b290",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                onClick={handleExpand}
              >
                Read more
              </span>
            )}
            {expanded && <p>and order the best of seasonal farm fresh food</p>}
            <div className="area-365-logo">
              <button>
                <FacebookIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <LinkedInIcon />
              </button>
            </div>
          </div>
          <hr />
          <div className="area365-below-banner-left-2">
            <div className="area365-below-banner-left-2-address">
              <LocationOnOutlinedIcon />
              <div>
                <h4>Address </h4>
                <p>
                  2Nd road, hsr layout,attiguppe, bangalore 560010, karnataka.
                </p>
              </div>
            </div>
            <div className=" area365-below-banner-left-2-phone">
              <PhoneOutlinedIcon />
              <div>
                <h4>Phone</h4>
                <p>+918970890678</p>
              </div>
            </div>
            <div className=" area365-below-banner-left-2-website">
              <LanguageOutlinedIcon />
              <div>
                <h4>Website</h4>
                <a href="www.redq.io">www.redq.io</a>
              </div>
            </div>
          </div>
        </div>
        <div className="area365-below-banner-right">
          {/* <GroceryAdd /> */}
          {/* <div className="grocery-list-header-container"> */}
          {groceryItems.map((item, index) => (
            <div key={item.id} className="card" title={item.title}>
              <div className="image-container">
                <div className="image-box">
                  <img src={item.imageUrl} alt="" />
                </div>

                {carts[index] ? (
                  <div className="cart-btn">
                    <button onClick={() => removeCart(index)}>-</button>
                    <h3>{counts[index]}</h3>
                    <button onClick={() => addCart(index)}>+</button>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleButton(index)}
                    className="add-btn"
                  >
                    <i className="fa-thin fa-plus"></i>
                  </button>
                )}

                {item.onSale && <p className="on-sale">ON SALE</p>}
              </div>

              <div className="details">
                ${item.price} <del>${item.price}</del>
                <p>{item.title}</p>
                <div className="">{item.description}</div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Shopproducts;

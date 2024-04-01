import React, { useState } from "react";
import "../../styles/productview.css";
import mainProductImage from "../assets/empty-cart.png"; // Import your main product image
import uh from "../assets/vitamin-items.png"; // Import your thumbnail images
import kk from "../assets/papa.webp";
import fe from "../assets/fast-food.png";
import CloseIcon from '@mui/icons-material/Close';
import Close from "@mui/icons-material/Close";

function ProductView({ onClose }) {
  const [currentImage, setCurrentImage] = useState(mainProductImage);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <button onClick={onClose} className="product-view-onclose"><Close/></button>
        <div className="product-view-images-container">
          <div className="product-view-images-container-left">
            <div className="main-product-image">
              <img src={currentImage} alt="Main Product" />
            </div>
            <div className="thumbnail-images">
              <img
                src={kk}
                alt="Thumbnail 1"
                onClick={() => handleThumbnailClick(kk)}
              />
              <img
                src={fe}
                alt="Thumbnail 2"
                onClick={() => handleThumbnailClick(fe)}
              />
              <img
                src={uh}
                alt="Thumbnail 3"
                onClick={() => handleThumbnailClick(uh)}
              />
            </div>
          </div>
          <div className="product-view-content-container-right">
            <div className="product-view-content-right-contents">
              <p>{`Nameofproduct`}</p>
              <p>{`price`}</p>
              <div className="product-view-content-right-size-box">
                <span>1L</span>
                <span>2L</span>
                <span>3Xl</span>
              </div>
              <div className="product-view-content-right-cart-button">
                <button onClick={decrement} className="product-view-decre-button">-</button>
                <span>{count}</span>
                <button onClick={increment} className="product-view-incre-button">+</button>
              </div>
              <div className="product-view-addcart-button">
                <button>Add Cart</button>
              </div>
              <div className="product-view-share-wishlist-btn">
                <button style={{border:'none',width:'48%',padding:'5px',borderRadius:'5px'}}>Wishlist</button>
                <button style={{border:'none',width:'48%',marginLeft:'4px',padding:'5px',borderRadius:'5px'}}>Share</button>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default ProductView;

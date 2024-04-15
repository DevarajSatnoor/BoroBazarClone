import React, { useState,useContext } from "react";
import { CartContext } from "../../redux/CartContext";
import "../../styles/productview.css";
import mainProductImage from "../assets/empty-cart.png"; // Import your main product image
import uh from "../assets/vitamin-items.png"; // Import your thumbnail images
import kk from "../assets/papa.webp";
import fe from "../assets/fast-food.png";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";

function ProductView({ onClose, selectedItem }) {
  const [currentImage, setCurrentImage] = useState(selectedItem.imageUrl || "");
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [availableProducts, setAvailableProducts] = useState({
    M: 10,
    L: 20,
    XL: 5,
  });
  const handleAddToCart = () => {
    const updatedCount = { ...count }; // This should be an integer, not an object
    // Increment count by 1
    setCount(prevCount => prevCount + 1);
    addToCart(selectedItem); // Pass the selectedItem to addToCart
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    // setAvailableProducts()
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="product-view-onclose">
          <Close />
        </button>
        <div className="product-view-images-container">
          <div className="product-view-images-container-left">
            <div className="main-product-image">
              <img src={currentImage} alt="Main Product" />
            </div>
            <div className="thumbnail-images">
              <img
                src={selectedItem.imageUrl}
                alt="Thumbnail 1"
                onClick={() => handleThumbnailClick(selectedItem.imageUrl)}
              />
              <img
                src={selectedItem.imageUrl}
                alt="Thumbnail 2"
                onClick={() => handleThumbnailClick(selectedItem.imageUrl)}
              />
              <img
                src={selectedItem.imageUrl}
                alt="Thumbnail 3"
                onClick={() => handleThumbnailClick(selectedItem.imageUrl)}
              />
            </div>
          </div>
          <div className="product-view-content-container-right">
            <div className="product-view-content-right-contents">
              <div className="product-view-content-ofproducts">
              <p style={{width:'200px'}}>{selectedItem.title}</p>
              <p > {`₹${selectedItem.price}`}</p>
              </div>
              <div className="product-view-content-right-size-box">
                {Object.keys(availableProducts).map((size) => (
                  <span
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={selectedSize === size ? "active" : ""}
                  >
                    {size}
                  </span>
                ))}
              </div>{" "}
              <br />
              {selectedSize && (
                <p style={{ color: "#f98f14", width: "200px" }}>
                  {/* Available products for size {selectedSize}:
                    {availableProducts[selectedSize]} */}
                  Only {availableProducts[selectedSize]} item's left!
                </p>
              )}
              <div className="product-view-content-right-cart-button">
                <button
                  onClick={decrement}
                  className="product-view-decre-button"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={increment}
                  className="product-view-incre-button"
                >
                  +
                </button>
              </div>
              <div className="product-view-addcart-button">
                <button onClick={() => handleAddToCart()}>Add Cart</button>
              </div>
              <div className="product-view-share-wishlist-btn">
                <button
                  style={{
                    border: "none",
                    width: "48%",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Wishlist
                </button>
                <button
                  style={{
                    border: "none",
                    width: "48%",
                    marginLeft: "4px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;

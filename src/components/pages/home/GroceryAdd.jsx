import React, { useState, useContext } from "react";
import { CartContext } from "../../../redux/CartContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../../styles/grocery.css'

import pic1 from "../../assets/iskii.png";
import iski1 from "../../assets/p-2.webp";
import iski2 from "../../assets/p-18.webp";
import iski3 from "../../assets/p-16.png";
import iski4 from "../../assets/p-13.png";
import ProductView from "../../products/ProductView";

function GroceryAdd() {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  
  const handleAddToCart = (item) => {
    const updatedCount = { ...count };
    updatedCount[item.id] = updatedCount[item.id] ? updatedCount[item.id] + 1 : 1;
    setCount(updatedCount);
    addToCart(item); // Pass the entire item object to addToCart
  };

  const handleIncrement = (itemId) => {
    const updatedCount = { ...count };
    updatedCount[itemId] = updatedCount[itemId] + 1;
    setCount(updatedCount);
  };

  const handleDecrement = (itemId) => {
    const updatedCount = { ...count };
    updatedCount[itemId] = updatedCount[itemId] - 1;
    setCount(updatedCount);
  };

  const openModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null); // Reset selected item when modal closes
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
      onSale: false, // This item is not on sale
    },
  ];

  return (
    <div style={{ margin: "20px 0px" }}>
      <div className="grocery-list-header">
        <h1>Best seller grocery near you</h1>
        <p>We provide best quality & fresh grocery items near your location</p>
      </div>
      <div className="grocery-list-header-container">
        {groceryItems.map((item) => (
          <div  key={item.id} className="card" title={item.title}>
            <div  className="image-container">
              <div onClick={() => openModal(item)} className="image-box"> {/* Pass item to openModal */}
                <img src={item.imageUrl} alt="" />
              </div>
              {item.onSale && <p className='on-sale'>ON SALE</p>}
              <div className="button-container">
                {item.onSale ? (
                  <button onClick={() => handleAddToCart(item)} className="add-btn">
                    <i className="fa-thin fa-plus"></i>
                  </button>
                ) : (
                  <button onClick={() => openModal(item)} className="view-btn"> {/* Pass item to openModal */}
                    <VisibilityIcon sx={{color:'white'}} />
                  </button>
                )}
                {count[item.id] && count[item.id] > 0 && (
                  <div className="cart-btn">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span style={{fontWeight:700}}>{count[item.id]}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                )}
              </div>
            </div>
            <div className="details">
            ₹{item.price} <del style={{ textDecoration: "line-through" }}>₹{item.price}</del>
              <p>{item.title}</p>
              <div className="">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Render the modal if showModal is true */}
      {showModal && <ProductView onClose={closeModal} selectedItem={selectedItem} />}
    </div>
  );
}

export default GroceryAdd;

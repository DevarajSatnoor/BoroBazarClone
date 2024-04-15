import React, { useContext } from "react";
import { CartContext } from "../../redux/CartContext";
import cart from "../assets/empty-cart.png";
import "../../styles/emtycart.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Emptycart({
  onClose,
  calculateSubtotal,
  calculateShippingCharge,
  calculateTotal,
}) {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  // Create a new array with unique items to avoid duplicates
  const uniqueCartItems = cartItems.reduce((uniqueItems, currentItem) => {
    const existingItemIndex = uniqueItems.findIndex(
      (item) => item.id === currentItem.id
    );
    if (existingItemIndex === -1) {
      uniqueItems.push(currentItem);
    }
    return uniqueItems;
  }, []);

  // Calculate total subtotal
  const totalSubtotal = uniqueCartItems.reduce((acc, item) => {
    const itemSubtotal = item.price * (item.quantity || 1); // Ensure quantity is a number
    return acc + itemSubtotal;
  }, 0);

  return (
    <div>
      <div className="empty-cart-head">
        <p>Shopping Cart</p>
        <span onClick={onClose}>
          <CloseIcon sx={{ color: "#02b290", fontSize: "x-large" }} />
        </span>
      </div>
      {/* <hr /> */}
      {cartItems.length === 0 ? (
        <div className="empty-cart-products-area">
          <div className="empty-cart-img">
            <img src={cart} alt="" />
            <div className="img-content">
              <p>Your Cart Is Empty</p>
              <span>Please add products to your cart</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-items">
          {uniqueCartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <CloseIcon
                onClick={() => removeFromCart(item)}
                sx={{
                  position: "absolute",
                  right: "15px",
                  top: "105px",
                  color: "#02b290",
                  fontSize: "large",
                }}
              />
              <img src={item.imageUrl} alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "1rem" }}>{item.title}</p>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                {/* Place console.log outside JSX */}
                {console.log("item.quantity:", item.quantity)}
                <p>Total: ₹{item.price * (item.quantity || 1)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <hr /> */}
      <div className="empty-cart-foot">
        <div className="empty-cart-foot-head">
          <p>Sub Total :</p>
          <span>₹{totalSubtotal.toFixed(2)}</span>
        </div>
        <p>
          Final price and discounts will be determined at the time of payment
          processing
        </p>
        <div className="empty-cart-button">
          {" "}
          <Link to={"/shop/checkout"}>
            <button disabled={cartItems.length === 0}>
              Proceed To CheckOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Emptycart;

import React, { useContext } from "react";
import { CartContext } from "../../redux/CartContext";
import cart from "../assets/empty-cart.png";
import "../../styles/emtycart.css";

function Emptycart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

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

  return (
    <div>
      <div className="empty-cart-head">
        <p>Shopping Cart</p>
        <span>cancel</span>
      </div>
      <hr />
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
              <img src={item.imageUrl} alt="" />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />
      <div className="empty-cart-foot">
        <div className="empty-cart-foot-head">
          <p>Sub Total :</p>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <p>
          Final price and discounts will be determined at the time of payment processing
        </p>
        <div className="empty-cart-button">
          <button disabled={cartItems.length === 0}>
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Emptycart;

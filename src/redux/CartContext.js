// CartContext.js

import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to calculate shipping charge
  const calculateShippingCharge = () => {
    // Implement your logic for calculating shipping charge here
    // For example, you could base it on the total weight of items in the cart
    // Return the calculated shipping charge
    return 5; // Example shipping charge
  };

  // Function to calculate total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCharge = calculateShippingCharge();
    return subtotal + shippingCharge;
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      removeFromCart(item); // Remove item from cart if quantity is 1 or less
    }
  };

  const increaseQuantity = (item) => {
    addToCart(item); // Just reuse the addToCart function to increase quantity
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decreaseQuantity,increaseQuantity,calculateSubtotal,  calculateShippingCharge,
        calculateTotal, }}
    >
      {children}
    </CartContext.Provider>
  );
};


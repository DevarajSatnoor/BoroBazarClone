import React, { useState } from "react";
import "../../../styles/grocery.css";
import pic1 from "../../assets/iskii.png";
// import iski from "../../assets/iskii.png";
import iski1 from "../../assets/p-2.webp";
import iski2 from "../../assets/p-18.webp";
import iski3 from "../../assets/p-16.png";
import iski4 from "../../assets/p-13.png";

function Mostsaledgrocery() {
  const [carts, setCarts] = useState(Array(10).fill(false));
  const [visible, setVisible] = useState(Array(10).fill(false));
  const [counts, setCounts] = useState(Array(10).fill(0));

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
  ];

  return (
    <div style={{ margin: "20px 0px" }}>
      <div className="grocery-list-header">
        <h1>Popular Product's We Sold </h1>
        <p>We provide best quality & fresh grocery items near your location</p>
      </div>
      <div className="grocery-list-header-container">
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
                <button onClick={() => toggleButton(index)} className="add-btn">
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
      </div>
      <br />
    </div>
  );
}

export default Mostsaledgrocery;

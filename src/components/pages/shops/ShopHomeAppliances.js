import React, { useState, useEffect } from "react";
import bannerhome from "../../assets/fruits-juice.png";
import "../../../styles/home-appliances.css";
import pic1 from "../../assets/iskii.png";
import iski from "../../assets/iskii.png";
import iski1 from "../../assets/p-2.webp";
import iski2 from "../../assets/p-18.webp";
import iski3 from "../../assets/p-16.png";
import iski4 from "../../assets/p-13.png";

function ShopHomeAppliances() {
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

    {
      id: 6,
      title: "Fresh Green Leaf Lettuce",
      imageUrl: iski,
      price: 2.64,
      description: "1 each",
      onSale: true,
    },
    {
        id: 7,
        title: "Fresh Green Leaf Lettuce",
        imageUrl: iski3,
        price: 2.64,
        description: "1 each",
        onSale: true,
      },
      {
        id: 8,
        title: "Fresh Green Leaf Lettuce",
        imageUrl: iski4,
        price: 2.64,
        description: "1 each",
        onSale: true,
      },
  
      {
        id: 9,
        title: "Fresh Green Leaf Lettuce",
        imageUrl: iski,
        price: 2.64,
        description: "1 each",
        onSale: true,
    },
      {
        id: 9,
        title: "Fresh Green Leaf Lettuce",
        imageUrl: iski,
        price: 2.64,
        description: "1 each",
        onSale: true,
    },
      {
        id: 9,
        title: "Fresh Green Leaf Lettuce",
        imageUrl: iski,
        price: 2.64,
        description: "1 each",
        onSale: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <>
      <div className="home-appliances-main">
        <div className="home-appliances-banner">
          <p>
            <div className="banner-content-appliances">
              <p className="heading-banner-home-appliances">
                Fruits Juice Items
              </p>
              <p className="para-banner-home-appliances">
                A Drink Made from the extraction or pressing of the natural
                liquid contained in fruit and vegetables{" "}
              </p>
            </div>
          </p>
        </div>
        <div className="home-appliances-lists">
          <div className="home-appliances-list-cards">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopHomeAppliances;

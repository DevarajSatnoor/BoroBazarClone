import React from "react";
// import '../../assets/mainhome-boro.webp'
import "../../../styles/homeboro.css";
import homban from "../../assets/mainhome-boro.webp";
import Slidehoveritems from "./Slidehoveritems";
import GroceryAdd from "../home/GroceryAdd";
import ban from "../../assets/banner-7.webp";
import Mostsaledgrocery from "./Mostsaledgrocery";
import hcard from "../../assets/hcard.png";
import hcard1 from "../../assets/hcard2.png";
import hcard2 from "../../assets/hcard3.png";
import hcard3 from "../../assets/hcard4.png";
import SliderHome from "./SliderHome";
import { Link } from "react-router-dom";

function Homeboro() {
  const shoppingBoxes = [
    {
      content: ["nnjjnkllk", "bbjnn"],
      backgroundColor: "rgb(255, 238, 214)",
      imgUrl: hcard, // Add image URL here
    },
    {
      content: ["Content 2", "More Content"],
      backgroundColor: "rgb(217, 236, 210)",
      imgUrl: hcard1, // Add image URL here
    },
    {
      content: ["Content 2", "More Content"],
      backgroundColor: "rgb(219, 229, 239)",
      imgUrl: hcard2, // Add image URL here
    },
    {
      content: ["Content 2", "More Content"],
      backgroundColor: "rgb(239, 216, 212)",
      imgUrl: hcard3, // Add image URL here
    },
  ];

  return (
    <div>
      <div className="home-container-boro">
        <img src={homban} alt="" className="home-container-imgeg" />
        <div className="overlay-content">
          <h1>Healthy Vegetable That Deserve   To Eat Fresh</h1>
          <p>
            We soource and Sell the Very Best Vegetable ,Groceries and some
            oTher Things ,sourced with the Greatest Careb from Former
          </p>
         <form action="">
         <input type="search" placeholder="What are you Looking for you..." />
         </form>
        </div>
        <div className="shoppingg-boxes">
          {shoppingBoxes.map((box, index) => (
            <div
              className="shopping-box-inline"
              key={index}
              style={{ backgroundColor: box.backgroundColor }}
            >
              <Link to={"/shop/shophomeappliances/${index}"}>
                {" "}
                <div className="shopping-box-content-img">
                  <img
                    src={box.imgUrl}
                    alt="Product"
                    style={{ width: "100px", height: "80px" }}
                  />{" "}
                  {/* Render image here */}
                </div>
              </Link>
              <div className="shopping-box-content">
                {box.content.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Slidehoveritems />
      </div>
      <div className="grocery list">
        <GroceryAdd />
      </div>
      <div className="banner-7">
        <Link to={"/shop/productlist"}>
          {" "}
          <img src={ban} alt="" />
        </Link>
      </div>
      <div className="most-saled-groceries">
        <Mostsaledgrocery />
      </div>
      <div className="slider">
        <p
          style={{
            fontSize: "30px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Curated Collections
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 500,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          We have categories the quality grocery items
        </p>
        <SliderHome />
      </div>
    </div>
  );
}

export default Homeboro;

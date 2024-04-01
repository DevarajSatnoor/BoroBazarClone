import React, { useState,useEffect } from "react";
import "../../styles/productlist.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import frshveg from "../assets/fresh-vegetables-dropdown.svg";
import diet from "../assets/diet-foods-dropdown.svg";
import fruits from "../assets/fruits-items-dropdown.svg";
import fast from "../assets/fast-food-dropdown.svg";
import nutri from "../assets/diet-nutrition-dropdown.svg";

function ProductList() {
  const [isFreshVegetablesOpen, setIsFreshVegetablesOpen] = useState(false);
  const [isDietFoodOpen, setIsDietFoodOpen] = useState(false);
  const [isDietNutritionsOpen, setIsDietNutritionsOpen] = useState(false);
  const [isFruitItemsOpen, setIsFruitItemsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
   

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  const handleFreshVegetablesClick = () => {
    setIsFreshVegetablesOpen(!isFreshVegetablesOpen);
  };

  const handleDietFoodClick = () => {
    setIsDietFoodOpen(!isDietFoodOpen);
  };

  const handleDietNutritionsClick = () => {
    setIsDietNutritionsOpen(!isDietNutritionsOpen);
  };

  const handleFruitItemsClick = () => {
    setIsFruitItemsOpen(!isFruitItemsOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="main-product-list">
      <div className="left-sidenav-product-list">
        {/* Fresh Vegetables Dropdown */}
        <button
          className={`dropdown-btn ${isFreshVegetablesOpen ? "active" : ""}`}
          onClick={handleFreshVegetablesClick}
        >
          <p className="dropdown-btn-p">
            <img src={frshveg} alt="" />
            Fresh Vegetables
          </p>
          <KeyboardArrowDownIcon
            style={{
              transform: isFreshVegetablesOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          />
        </button>
        <div
          className={`dropdown-container ${
            isFreshVegetablesOpen ? "show" : ""
          }`}
        >
          <div className="dropdown-container-1">
            <label
              htmlFor="option1"
              onClick={() => handleOptionSelect("Option 1")}
            >
              Option 1
              <input type="radio" id="option1" name="options" value="option1" />
            </label>
            <label
              htmlFor="option2"
              onClick={() => handleOptionSelect("Option 2")}
            >
              {" "}
              Option 2
              <input type="radio" id="option2" name="options" value="option2" />
            </label>
            <label
              htmlFor="option3"
              onClick={() => handleOptionSelect("Option 3")}
            >
              {" "}
              Option 3
              <input type="radio" id="option3" name="options" value="option3" />
            </label>
          </div>

          {/* Add your filtered data here */}
        </div>

        {/* Diet Food Dropdown */}
        <button
          className={`dropdown-btn ${isDietFoodOpen ? "active" : ""}`}
          onClick={handleDietFoodClick}
        >
          <p className="dropdown-btn-p">
            {" "}
            <img src={diet} alt="" />
            Diet Foods
          </p>
          <KeyboardArrowDownIcon
            style={{
              transform: isDietFoodOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
        <div className={`dropdown-container ${isDietFoodOpen ? "show" : ""}`}>
          {/* Add your Diet Food options here */}
        </div>

        {/* Diet Nutritions Dropdown */}
        <button
          className={`dropdown-btn ${isDietNutritionsOpen ? "active" : ""}`}
          onClick={handleDietNutritionsClick}
        >
          <p className="dropdown-btn-p">
            <img src={nutri} alt="" /> Diet Nutritions
          </p>
          <KeyboardArrowDownIcon
            style={{
              transform: isDietNutritionsOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          />
        </button>
        <div
          className={`dropdown-container ${isDietNutritionsOpen ? "show" : ""}`}
        >
          {/* Add your Diet Nutritions options here */}
        </div>

        {/* Fruit Items Dropdown */}
        <button
          className={`dropdown-btn ${isFruitItemsOpen ? "active" : ""}`}
          onClick={handleFruitItemsClick}
        >
          <p className="dropdown-btn-p">
            <img src={fruits} alt="" />
            Fruit items{" "}
          </p>
          <KeyboardArrowDownIcon
            style={{
              transform: isFruitItemsOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
        <div className={`dropdown-container ${isFruitItemsOpen ? "show" : ""}`}>
          {/* Add your Fruit Items options here */}
        </div>
      </div>
      <div className="right-product-list">
        {selectedOption && (
          <div>
            <p>Selected Option: {selectedOption}</p>
            jjhjhhhoho
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;

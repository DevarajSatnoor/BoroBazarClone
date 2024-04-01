import React from "react";
import "../../../styles/slidehoveritem.css";
import papa from "../../assets/papa.webp";
import ffood from "../../assets/fast-food.png";
import dfood from "../../assets/diet-foods.webp";
import cdrnks from "../../assets/cold-drinks.png";
import fruts from "../../assets/fruits-items.png";
import fveg from "../../assets/fresh-vegetables.png";
import vitmens from "../../assets/vitamin-items.png";
import { Link } from "react-router-dom";

function Slidehoveritems() {
  const images = [
    { src: papa },
    { src: fveg },
    { src: fruts },
    { src: vitmens },
    { src: cdrnks },
    { src: ffood },
    { src: dfood },
  ];

  return (
    <div style={{ padding: "0px 20px", margin: "20px 0px" }}>
      <div className="slided-content">
        {" "}
        <br />
        <h1>What food love to order</h1>
        <p>Here order your favorite foods from different categories</p>
      </div>
      <div className="slided-container">
        {" "}
        {images.map((image, index) => (
          <Link to={`/shop/productlist/${index}`}>
            <div key={index} className="hover-img">
              <img src={image.src} alt="" className="active" />
              <img src={image.src} alt="" className="next" />
            </div>
          </Link>
        ))}
      </div>
      <br /> <br />
    </div>
  );
}

export default Slidehoveritems;

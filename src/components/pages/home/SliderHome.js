import React from "react";
import "../../../styles/sliderhome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boro1 from "../../assets/sliderboro.img1.webp";
import boro2 from "../../assets/sliderboro.img2.png";
import boro3 from "../../assets/sliderboro.img3.png";
import boro4 from "../../assets/sliderboro.img4.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

 
function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    centerMode: true, // Enable center mode
    centerPadding: '10px', // Horizontal gap between slides
    prevArrow: <PrevButton />, // Custom previous button
    nextArrow: <NextButton />, // Custom next button
  };
 
  return (
    <Slider {...settings}>
      <Link to={'/shop/shophomeappliances'}>
      <div className="slide-item">
        <img
          className="slide-image"
          src={boro1}
          alt="slide1"
        />
        <div className="footer-caption">
          <h2>Feel the thirst in summer anytime</h2>
          <p>Your body's way of telling you that it's</p>
        </div>
      </div>
      </Link>
      <div className="slide-item">
        <img
          className="slide-image"
          src={boro2}
          alt="slide2"
        />
        <div className="footer-caption">
          <h2>Most Popular item for fast food</h2>
          <p>Tasty and spicy fast food with different ...</p>
        </div>
      </div>
      <div className="slide-item">
        <img
          className="slide-image"
          src={boro3}
          alt="slide3"
        />
        <div className="footer-caption">
          <h2>Authentic Japanese food in real time</h2>
          <p>Your body's way of telling you that it's...</p>
        </div>
      </div>
      <div className="slide-item">
        <img
          className="slide-image"
          src={boro4}
          alt="slide4"
        />
        <div className="footer-caption">
          <h2>Explore our family of freshest food</h2>
          <p>Your body's way of telling you that it's</p>
        </div>
      </div>
    </Slider>
  );
}
 
// Custom previous button component
const PrevButton = ({ onClick }) => (
  <button className="footer-prev-button" onClick={onClick}>
    {/* prev */}<ArrowBackIosIcon/>
  </button>
);
 
// Custom next button component
const NextButton = ({ onClick }) => (
  <button className="footer-next-button" onClick={onClick}>
    {/* next */}<ArrowForwardIosIcon sx={{display:'flex',alignItems:'center',justifyContent:'center'}}/>
  </button>
);
 
export default SliderHome;

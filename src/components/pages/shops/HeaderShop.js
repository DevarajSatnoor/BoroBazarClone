// import React from 'react'
import React, { useState, useEffect } from "react";
import "../../../styles/shopage.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styles from "../../../styles/shop.module.css";
import appstore from "../../assets/boro1.png";
import playstore from "../../assets/boro2.png";
import thumbnail from "../../assets/app-thumbnail.png";
import bag from "../../assets/logoboro.svg";
import fb from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import ig from "../../assets/instagram.svg";
import utube from "../../assets/youtube.svg";
import popcornlogo from "../../assets/shop-logo-1.png";
import organiclogo from "../../assets/shop-logo-2.png";
import veglogo from "../../assets/shop-logo-3.png";
import cakelogo from "../../assets/shop-logo-4.png";
import cookielogo from "../../assets/shop-logo-5.png";
import gocerylogo from "../../assets/shop-logo-6.png";
import logoboro from "../../assets/logoboro.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HeaderShop() {

    const [isBottomHeaderVisible, setIsBottomHeaderVisible] = useState(true);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [righticons, setRighticons] = useState(false);
    const [address, setAdddress] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
  
    const handleProductMouseEnter = () => {
      setShowProductModal(true);
      setIsHovering(true);
    };
  
    const handleProductMouseLeave = () => {
      setShowProductModal(false);
      setIsHovering(false);
    };
  
    const handleProductModalClick = (e) => {
      e.stopPropagation(); // Prevent click event from propagating to the parent li
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const belowBar = document.querySelector(".shopage-header-below-bar");
        const logo = document.querySelector(".logo");
  
        if (scrollPosition > belowBar.offsetTop) {
          setIsBottomHeaderVisible(false);
          setIsLogoVisible(true);
          setRighticons(true);
          setAdddress(false);
        } else {
          setIsBottomHeaderVisible(true);
          setIsLogoVisible(false);
          setRighticons(false);
          setAdddress(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <div>
         <header className={isBottomHeaderVisible ? "" : "sticky"}>
        <div className="shopage-header-main">
          <div className="shopage-header-main-left">
            {/* Left-side logo */}
            <img
              // src={require("../../assets/logoboro.svg")}
              src={logoboro}
              alt="Logo"
              className="logo"
            />
            <div className="shopage-header-main-middle">
              {/* Middle navigation items */}
              <div className="search-wrapper">
                <input type="search" placeholder="Search..." />
                <div className="search-icon">
                  <SearchIcon sx={{ color: "#ccc" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="shopage-header-main-right">
            {/* Right-side icons */}
            <div className="shopage-header-main-right-icons">
              <span className="shopage-header-main-right-cart-icon">
                <ShoppingBagOutlinedIcon
                  sx={{ color: "#bebfc1", fontSize: "25px" }}
                />
                Cart
              </span>
              <span className="shopage-header-main-right-signin-icon">
                <AccountCircleOutlinedIcon
                  sx={{ color: "#bebfc1", fontSize: "25px" }}
                />
                Sign In
              </span>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`shopage-header-below-bar ${
          isBottomHeaderVisible ? "" : "sticky"
        }`}
      >
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          <div
            className={`left-shopage-header ${isLogoVisible ? "" : "hidden"}`}
          >
            {/* Left-side logo */}
            <img src={logoboro} alt="Logo" className="logo" />
          </div>

          <div className="middle-shopage-header">
            <ul className="navbar-left">
              <li className="header__nav-item relative">
                <Link to="/" className="header__nav-link">
                  Home
                </Link>
              </li>
              <li
                className="header__nav-item relative"
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
                onClick={handleProductModalClick}
              >
                <Link to="/" className="header__nav-link">
                  Product{" "}
                  {isHovering ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Link>
              </li>
              <li className="header__nav-item relative">
                <Link to="/shop/aboutus" className="header__nav-link">
                  About
                </Link>
              </li>
              <li className="header__nav-item relative">
                <Link to="/shop/contactus" className="header__nav-link">
                  Contact
                </Link>
              </li>
              <li className="header__nav-item relative">
                  <Link to="/shop/productlist" className="header__nav-link">
                    Categories
                  </Link>
                </li>
            </ul>
          </div>
        </div>
        <span className={`midright-shopage-header ${address ? "" : "hidden"}`}>
          <Link to="/" style={{ display: "flex", color: "#000" }}>
            {" "}
            <LocationOnOutlinedIcon /> Delivery :{" "}
            <span style={{ color: "#02b290" }}>Address</span>
          </Link>
        </span>
        <div className={`right-shopage-header ${righticons ? "" : "hidden"}`}>
          <span>
            <SearchIcon />
          </span>
          <span className="right-shopage-header-belowbar-cart-icon">
            <ShoppingBagOutlinedIcon
              sx={{ color: "#bebfc1", fontSize: "25px" }}
            />
            Cart
          </span>
          <span className="right-shopage-header-belowbar-signin-icon">
            <AccountCircleOutlinedIcon
              sx={{ color: "#bebfc1", fontSize: "25px" }}
            />
            Sign In
          </span>
        </div>
      </div>
      
      {showProductModal && (
          <div
            className="product-modal-shopage"
            onMouseLeave={handleProductMouseLeave}
            onMouseEnter={handleProductMouseEnter}
            onClick={handleProductModalClick}
          >
            hkhkj
          </div>
        )}
        {/* ....................................................... */}



    </div>
  )
}

export default HeaderShop
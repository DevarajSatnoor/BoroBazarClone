import React, { useState, useEffect } from "react";
import "../../../styles/shopage.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styles from "../../../styles/shop.module.css";
import logoboro from "../../assets/logoboro.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Emptycart from "../../header&footer/Emptycart";
import Drawer from "@mui/material/Drawer";
import SignBoro from "../../header&footer/SignBoro";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

function HeaderShop() {
  const [isBottomHeaderVisible, setIsBottomHeaderVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [righticons, setRighticons] = useState(false);
  const [address, setAddress] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [modalTop, setModalTop] = useState(140);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [userAddress, setUserAddress] = useState(null); // State to store user's address

  // Function to fetch user's current location
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                const address = data.results[0].formatted_address;
                setUserAddress(address);
              } else {
                console.error("No address found.");
              }
            })
            .catch((error) => {
              console.error("Error retrieving address:", error.message);
            });
        },
        (error) => {
          console.error("Error retrieving location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    // Call the fetchUserLocation function to initiate location fetching
    fetchUserLocation();
  }, []);

  // Function to update the position of the modal when scrolling
  useEffect(() => {
    const updateModalPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setModalTop(140 - scrollTop); // Adjust position based on scroll
    };

    window.addEventListener("scroll", updateModalPosition);

    return () => {
      window.removeEventListener("scroll", updateModalPosition);
    };
  }, []);

  const handleProductsMouseEnter = () => {
    setShowProductModal(true);
    setIsHovering(true);
  };

  const handleProductsMouseLeave = () => {
    setShowProductModal(false);
    setIsHovering(false);
  };

  const handleProductModalsClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent li
  };

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
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
        setAddress(false);
      } else {
        setIsBottomHeaderVisible(true);
        setIsLogoVisible(false);
        setRighticons(false);
        setAddress(true);
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
            <Link to={'/'}>
              <img
                src={logoboro}
                alt="Logo"
                className="logo"
              />
            </Link>
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
              <span className="shopage-header-main-right-cart-icon" onClick={toggleCartDrawer}>
                <ShoppingBagOutlinedIcon
                  sx={{ color: "#bebfc1", fontSize: "25px" }}
                />
                Cart
              </span>
              <span className="shopage-header-main-right-signin-icon">
                <SignBoro />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* {.............below header-bar.................} */}
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
            <Link to={'/'}>
              <img src={logoboro} alt="Logo" className="logo" />
            </Link>
          </div>

          <div className="middle-shopage-header">
            <ul className="navbar-left">
              <li className="header__nav-item relative">
                <Link to="/shop" className="header__nav-link">
                  Home
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
        <span className={`midright-shopage-header ${address ? "" : "hidden"}`} onClick={fetchUserLocation}>
          <Link to="" style={{ display: "flex", color: "#000" }}>
            {" "}
            <LocationOnOutlinedIcon /> Delivery :{" "}
            <span style={{ color: "#02b290" }}>{userAddress}</span>
          </Link>
        </span>
        <div className={`right-shopage-header ${righticons ? "" : "hidden"}`}>
          <span>
            <SearchIcon />
          </span>
          <span className="right-shopage-header-belowbar-cart-icon" onClick={toggleCartDrawer}>
            <ShoppingBagOutlinedIcon
              sx={{ color: "#bebfc1", fontSize: "25px" }}
            />
            Cart
          </span>
          <span className="right-shopage-header-belowbar-signin-icon">
            <SignBoro />
          </span>
        </div>
      </div>

      {showProductModal && (
        <div
          className="product-modal-shopage"
          onMouseLeave={handleProductsMouseLeave}
          onMouseEnter={handleProductsMouseEnter}
          onClick={handleProductModalsClick}
        >
          <div>
            {states.slice(0, 10).map((state, index) => (
              <div key={index}>{state}</div>
            ))}
          </div>
        </div>
      )}

      {/* Drawer component for the cart */}
      <Drawer
        anchor="right"
        open={isCartDrawerOpen}
        onClose={toggleCartDrawer}
      >
        <div style={{ width: 400 }}>
          <Emptycart onClose={toggleCartDrawer} />
        </div>
      </Drawer>
    </div>
  );
}

export default HeaderShop;

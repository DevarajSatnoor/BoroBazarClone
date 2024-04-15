import React, { useState, useContext } from "react";
import { CartContext } from "../../redux/CartContext";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import BrowserRouter and Link
import "../../styles/header.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../assets/logoboro.svg";
import Drawer from "@mui/material/Drawer";
import Emptycart from "./Emptycart";
import SignBoro from "./SignBoro";
import Signin from "./signpages/Signin";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const states = [
  "andhra Pradesh",
  "arunachal Pradesh",
  "assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Kerala",
  "Karnataka",
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
  "West Bengal",
];

function Header() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [selectedState, setSelectedState] = useState(null);

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

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const test = cartItems.reduce((acc, item) => {
    console.log("acc", acc);
    console.log("total", item);
  }, 0);
  // console.log('test',test)

  return (
    <>
      {" "}
      {/* Wrap your component tree with BrowserRouter */}
      <div className="header-main-fixed">
        <div className="header-main">
          <div className="left-header-content">
            <nav className="left-header-logo-content">
              <div className="header__logo">
                <Link to="/" className="header__logo-link img-responsive">
                  <LocalMallIcon
                    sx={{ color: "rgb(2 178 144)", fontSize: "xx-large" }}
                  />
                  BoroBazar
                </Link>
              </div>

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
                  <Link to="shop/contactus" className="header__nav-link">
                    Contact
                  </Link>
                </li>
                <li className="header__nav-item relative">
                  <Link to="/shop" className="header__nav-link">
                    Shop
                  </Link>
                </li>
                <li className="header__nav-item relative">
                  <Link to="/shop/productlist" className="header__nav-link">
                    Categories
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {showProductModal && (
            <div
              className="product-modal"
              onMouseLeave={handleProductMouseLeave}
              onMouseEnter={handleProductMouseEnter}
              onClick={handleProductModalClick}
            >
             
              {states.slice(0,10).map((state) => (
                <Link
                  className="capitalize"
                  to={`/shop/states/${state}`}
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </Link>
              ))}
              {states.slice(10, 20).map((state) => (
                <Link
                  className="capitalize"
                  to={`/shop/states/${state}`}
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </Link>
              ))}
              {states.slice(20, 30).map((state) => (
                <Link
                  className="capitalize"
                  to={`/shop/states/${state}`}
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </Link>
              ))}
            </div>
          )}
          <div className="right-header-content">
            <div className="cart-icon-box">
              <Link to={"/"} className="cart-icon" onClick={toggleCartDrawer}>
                <button className="cart-icon">
                  <ShoppingBagOutlinedIcon
                    sx={{ color: "#bebfc1", fontSize: "25px" }}
                  />
                  Cart
                  <span className="badge">{totalItems}</span>{" "}
                  {/* Display badge only if there are items in the cart */}
                </button>
              </Link>
            </div>
            <div className="signin-icon-box">
              <Link to={"/"} className="signin-icon">
                {" "}
                {/* <SignBoro /> */}
                <div class="dropdown">
                  <button class="dropbtn">
                    <AccountCircleOutlinedIcon
                      sx={{ color: "#bebfc1", fontSize: "25px" }}
                    />
                    My account
                  </button>
                  <div class="dropdown-content">
                    <Link to={"/"}>
                      <Signin />
                    </Link>
                    <Link to={"/shop/privacypage"}>Privacy & Policy </Link>
                    <Link to={"/shop/termsconditionpage"}>
                      Tearms & Condition
                    </Link>
                    <Link to={"/shop/faq"}>FAQ</Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>

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
      </div>
    </>
  );
}

export default Header;

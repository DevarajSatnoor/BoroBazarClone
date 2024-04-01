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
// import SearchIcon from '@mui/icons-material/Search';

const shops = [
  {
    name: "Popcorn Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: popcornlogo,
  },
  {
    name: "Organic Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: organiclogo,
  },
  {
    name: "Vegetables Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: veglogo,
  },
  {
    name: "Cake Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: cakelogo,
  },
  {
    name: "Cookies Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: cookielogo,
  },
  {
    name: "Grocery Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: gocerylogo,
  },
];

function Shopage() {
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
      {/* Bottom header */}
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
                <Link to="/" className="header__nav-link">
                  About
                </Link>
              </li>
              <li className="header__nav-item relative">
                <Link to="/" className="header__nav-link">
                  Contact
                </Link>
              </li>
              {/* <li className="header__nav-item relative">
                  <Link to="/shop" className="header__nav-link">
                    Shop
                  </Link>
                </li> */}
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
      {/* Other content */}
      <div className="shpage-home-container">
        <div className={styles.shopBg}>
          {/* <span>Shop Page</span> */}
          <div className="">
            <span class="block mb-3 font-bold font-manrope md:mb-4 lg:mb-5 2xl:mb-7 ">
              Shop Page
            </span>
          </div>
          <di className={styles.shopHome}>
            <div style={{ display: "flex", gap: "10px" }} className="">
              <i
                class="fa-solid fa-house fa-1x"
                style={{
                  fontSize: "12px",
                  position: "relative",
                  bottom: "-1px",
                }}
              ></i>
              <Link to={"/"}>Home</Link>
            </div>
            <div style={{ display: "flex", gap: "15px" }} className="">
              <i
                class="fa-solid fa-chevron-right"
                style={{ fontSize: "12px", position: "relative", top: "3px" }}
              ></i>
              <Link to={""} style={{ color: "white" }}>
                Shops
              </Link>
            </div>
          </di>
        </div>

   
        {/* ================================================================================ */}

        <div className="shopsContainer">
          <div>
            <h2 className="heading">All Shops</h2>
            <div className="allShops">
              {shops.map((shop, index) => (
                <a href="#" className="anchorStyle" key={index}>
                  <div className="shopLogo">
                    <img src={shop.logo} alt="" />
                  </div>
                  <div className="shopAddress">
                    <h2>{shop.name}</h2>
                    <p>{shop.address}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================================= */}

        <div className={styles.thumbnail}>
          <div className={styles.thumbnailTextContainer}>
            <div className={styles.thumbnailText}>
              <h2>Make your online shop easier with our mobile app </h2>
              <p>
                BoroBazar makes online grocery shopping fast and easy. Get
                groceries delivered and order the best of seasonal farm fresh
                food.
              </p>
              <div style={{ display: "flex", gap: "30px" }}>
                <Link className={styles.appStore} to={"/"}>
                  <img
                    style={{
                      height: "58px",
                      width: "170px",
                      borderRadius: "8px",
                    }}
                    src={appstore}
                    alt=""
                  />
                </Link>
                <Link className={styles.appStore} to={"/"}>
                  <img
                    style={{
                      height: "58px",
                      width: "170px",
                      borderRadius: "8px",
                    }}
                    src={playstore}
                    alt=""
                  />
                </Link>
              </div>{" "}
            </div>
            <br />
          </div>

          {/* <div className={styles.thumbnailImage}>
            <img
              style={{ height: "100%", width: "100%" }}
              src={thumbnail}
              alt=""
            />
          </div> */}
        </div>
        {/* ======================================================================================= */}

        <div className={styles.shopFooterContainer}>
          <div className={styles.shopFooter}>
            <div className={styles.borobazar}>
              <a className={styles.borobazarLink} href="">
                <img src={bag} alt="" />
              </a>
              <p>
                We offer high-quality foods and the best delivery service, and
                the food market you can blindly trust.
              </p>
              <div href="" className={styles.socialApps}>
                <a className="">
                  <img src={fb} alt="" />
                </a>
                <a className="">
                  <img src={twitter} alt="" />
                </a>
                <a className="">
                  <img src={ig} alt="" />
                </a>
                <a className="">
                  <img src={utube} alt="" />
                </a>
              </div>
            </div>

            <div className={styles.aboutUs}>
              <p href="">About Us</p>
              <a href="">About us</a>

              <a href="">Contact us</a>

              <a href="">About team</a>

              <a href="">Customer Support</a>
            </div>
            <div className={styles.information}>
              <p href="">Our Information</p>

              <a href="">Privacy policy update</a>

              <a href="">Terms & conditions</a>

              <a href="">Return Policy</a>

              <a href="">Site Map</a>
            </div>
            <div className={styles.community}>
              <p href="">Community</p>

              <a href="">Announcements</a>

              <a href="">Answer center</a>

              <a href="">Discussion boards</a>

              <a href="">Giving works</a>
            </div>

            <div className={styles.subscribe}>
              <h5>Subscribe Now</h5>
              <p>
                Subscribe your email for newsletter and featured news based on
                your interest.
              </p>

              <form action="" className={styles.emailForm}>
                <i
                  style={{ color: "rgb(89 89 89  )" }}
                  class="fa-regular fa-envelope"
                ></i>
                <input
                  type="email"
                  placeholder="Write your email here"
                  required
                />
                <button type="submit">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
              </form>
            </div>
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
}

export default Shopage;

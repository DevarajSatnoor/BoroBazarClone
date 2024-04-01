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

const shops = [
  {
    id: 1,
    name: "Popcorn Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: popcornlogo,
  },
  {
    id: 2,
    name: "Organic Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: organiclogo,
  },
  {
    id: 3,
    name: "Vegetables Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: veglogo,
  },
  {
    id: 4,
    name: "Cake Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: cakelogo,
  },
  {
    id: 5,
    name: "Cookies Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: cookielogo,
  },
  {
    id: 6,
    name: "Grocery Shop",
    address: "588 Finfoot Road, New Jesry, East Dover, 08753, USA",
    logo: gocerylogo,
  },
];

function ShopHome() {
  return (
    <div>
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
              {/* Wrap the shop items with Link */}
              {shops.map((shop, index) => (
                <Link
                  to={`shopproducts/${index}`}
                  className="anchorStyle"
                  key={index}
                >
                  <div className="shopLogo"> 
                    <img src={shop.logo} alt="" />
                  </div>
                  <div className="shopAddress">
                    <h2>{shop.name}</h2>
                    <p>{shop.address}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================================= */}

        {/* ======================================================================================= */}
      </div>
    </div>
  );
}

export default ShopHome;

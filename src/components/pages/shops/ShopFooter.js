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


function ShopFooter() {
  return (
    <div>
    
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
  )
}

export default ShopFooter
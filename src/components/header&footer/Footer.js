import React from "react";
import "../../styles/footer.css";
import boro from "../assets/boro1.png";
import boro2 from "../assets/boro2.png";
import boro3 from "../assets/boro3.png";
import { Link } from "react-router-dom";
import paymnt from "../assets/payment.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Footer() {
  return (
    <div>
      <div className="boro-footer-banner">
        {" "}
        <div className="boro-banner-left">
          <div style={{ padding: "32px 0px", width: "350px", height: "294px" }}>
            <h2
              style={{
                fontSize: "40px",
                marginBottom: "16px",
                color: "#000000",
                fontWeight: 700,
                width: "600px",
              }}
            >
              Make your online shopping easier with our mobile app
            </h2>
            <p
              style={{
                fontSize: "15px",
                paddingRight: "80px",
                paddingRight: "28px",
                width: "500px",
              }}
            >
              BoroBazar makes online grocery shopping fast and easy. Get
              groceries delivered and order the best of seasonal farm fresh
              food.
            </p>{" "}
            <br />
            <div className="playstore-link-buttons">
              {" "}
              <Link
                to={"https://www.apple.com/in/store"}
              >
                {" "}
                <img style={{ width: "145px", height: "45px" }} src={boro} />
              </Link>
              <Link
                to={"https://play.google.com/store/games?hl=en_IN&gl=US&pli=1"}
              >
                <img style={{ width: "145px", height: "45px" }} src={boro2} />
              </Link>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img
            style={{ width: "464px", height: "389px", paddingLeft: "16px" }}
            src={boro3}
          />
        </div>
      </div>
      <footer>
        <div className="footer mt-100">
          <div className="footer-container flexCenterCenter">
            <div className="footer__top flexBetweenCenter">
              <div className="footer1 w-[30%]">
                <div className="footer__about">
                  <div className="footer__logo">
                    <Link to="#" className="header__logo-link img-responsive">
                      <LocalMallIcon
                        sx={{ color: "rgb(2 178 144)", fontSize: "xx-large" }}
                      />
                      BoroBazar
                    </Link>
                  </div>
                  <ul className="footer__address">
                    <li className="footer__address-item">
                      No: 58 A, your Street, Baltimore, USA 4508
                    </li>
                    <li className="footer__address-item">+01 23456789</li>
                    <li className="footer__address-item">
                      support@somemail.com
                    </li>
                  </ul>
                  <ul className="footer__social-nav">
                    <li className="footer__social-list">fb</li>
                    <li className="footer__social-list">in</li>
                    <li className="footer__social-list">X</li>
                    <li className="footer__social-list">YT</li>
                  </ul>
                </div>
              </div>
              <div className="footer__menu w-[17.5%]">
                <h3 className="footer__nav-title">INFORMATION</h3>
                <ul className="footer__nav">
                  <li className="footer__list">
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li className="footer__list">
                    <Link href="#">Delivary Information</Link>
                  </li>
                  <li className="footer__list">
                    <Link href="#">Privacy & Policy</Link>
                  </li>
                  <li className="footer__list">
                    <Link href="#">Term & condition</Link>
                  </li>
                  <li className="footer__list">
                    <Link href="#">Manfacturer</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu w-[17.5%]">
                <h3 className="footer__nav-title">OUR COMPANY</h3>
                <ul className="footer__nav">
                  <li className="footer__list">
                    <Link to="/">My account</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">My cart</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Login</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Wishlist</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Checkout</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu w-[17.5%]">
                <h3 className="footer__nav-title">MY ACCOUNT</h3>
                <ul className="footer__nav">
                  <li className="footer__list">
                    <Link to="/">Shirts & Blouses</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Halter Tops</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Lang PAnt</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Hoodies</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">Sweatshirts</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu w-[17.5%]">
                <h3 className="footer__nav-title">OPENING TIME</h3>
                <ul className="footer__nav">
                  <li className="footer__list">
                    <Link to="/">MON : 8AM TO 10PM</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">SAT : 9AM TO 5PM</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">SUN : HOLIDAY </Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/">WE WORK ALL 24/7 ONLINE</Link>
                  </li>
                  <li className="footer__list">
                    <Link to="/" style={{color:'#666',textDecoration:"underline"}} className="footer__link font--bold">
                      Download Our App
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="bottom-footer">
              <div className="bottom-footer-top flexBetweenCenter">
                <p>Copyright © . All Rights Reserved</p>
                <div className="bottom-footer-logos">
                  <Link to={"/"}>
                    <img src={paymnt} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

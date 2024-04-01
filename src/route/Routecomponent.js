import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header&footer/Header";
import Homeboro from "../components/pages/home/Homeboro";
import Footer from "../components/header&footer/Footer";
// import Shopage from "../components/pages/home/Shopage";
import HeaderShop from "../components/pages/shops/HeaderShop";
import ShopHome from "../components/pages/shops/ShopHome";
import ShopFooter from "../components/pages/shops/ShopFooter";
import Shopproducts from "../components/pages/shops/Shopproducts";
import ProductList from "../components/products/ProductsList";
import AboutUsBoro from "../components/header&footer/AboutUsBoro";
import ContactUs from "../components/header&footer/ContactUsBoro";
import ShopHomeAppliances from "../components/pages/shops/ShopHomeAppliances";
// import CreateAccount from "../components/header&footer/CreateAccount";

function Routecomponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for home page */}
        <Route path="/" element={<HomeWithHeaderAndFooter />} />
        {/* Route for Shopage without header and footer */}
        <Route
          path="shop/*"
          element={<ShopageWithoutHeaderAndFooter />}
          
        ></Route>

      </Routes>
    </BrowserRouter>
  );
}

// Home page with Header and Footer
function HomeWithHeaderAndFooter() {
  return (
    <>
      <Header />
      <Homeboro />
      <Footer />
    </>
  );
}

// Shopage without Header and Footer
function ShopageWithoutHeaderAndFooter() {
  // return <Shopage />;
  return (
    <>
      <HeaderShop />
      <Routes>
        <Route path="/" element={<ShopHome />} />
        <Route path="/shopproducts/:id" element={<Shopproducts />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductList />} />
        <Route path="/aboutus"  element={<AboutUsBoro/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route  path="/shophomeappliances/:id" element={<ShopHomeAppliances/>}/>
        
       
      </Routes>
      <ShopFooter />
    </>
  );
}

export default Routecomponent;

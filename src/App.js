import React from "react";
import Routecomponent from "./route/Routecomponent";
import { CartProvider } from "./redux/CartContext";
import CreateStore from "./store/CreateStore"; // Import the CartProvider
import "tailwindcss/tailwind.css";
import Shopage from "./components/pages/home/Shopage";
import Slidehoveritems from "./components/pages/home/Slidehoveritems";
import ProductList from "./components/products/ProductsList";
import AboutUsBoro from "./components/header&footer/AboutUsBoro";
import ContactUs from "./components/header&footer/ContactUsBoro";
import SliderHome from "./components/pages/home/SliderHome";
import Giproducts from "./components/products/Giproducts";
import CheckoutPage from "./components/products/CheckoutPage";

function App() {
  return (
    <div className="App">
      <CreateStore>
        <CartProvider>
          {" "}
          {/* Wrap your components with the CartProvider */}
          <Routecomponent />
          {/* <CheckoutPage/> */}
       
        </CartProvider>
      </CreateStore>
    </div>
  );
}

export default App;

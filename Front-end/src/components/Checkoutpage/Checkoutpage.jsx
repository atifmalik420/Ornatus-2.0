import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Checkout from "../../containers/Checkout/Checkout";
import Footer from "../../containers/Footer/Footer";
import "./checkoutpage.css";

const Checkoutpage = () => {
  return (
    <div>
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default Checkoutpage;

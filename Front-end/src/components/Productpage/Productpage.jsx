import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Productdetail from "../../containers/Productdetail/Productdetail";
import Services from "../../containers/Services/Services";
import Furniture from "../../containers/Furniture/Furniture";
import Footer from "../../containers/Footer/Footer";
import "./productpage.css";

const Productpage = () => {
  return (
    <div>
      <Navbar />
      <Productdetail />
      <Services />
      <Furniture />
      <Footer />
    </div>
  );
};

export default Productpage;

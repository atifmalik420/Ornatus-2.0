import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Categoryproducts from "../../containers/Categoryproducts/Categoryproducts";
import Footer from "../../containers/Footer/Footer";
import "./categorypage.css";

const Categorypage = () => {
  return (
    <div>
      <Navbar />
      <Categoryproducts />
      <Footer />
    </div>
  );
};

export default Categorypage;

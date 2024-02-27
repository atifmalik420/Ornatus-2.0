import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Carousal from "../../containers/Carousal/Carousal";
import Categories from "../../containers/Categories/Categories";
import Section from "../../containers/Section/Section";
import Footer from "../../containers/Footer/Footer";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Categories />
      <Section />
      <Footer />
    </div>
  );
};

export default Landingpage;

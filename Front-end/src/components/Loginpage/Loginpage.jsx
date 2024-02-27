import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import Loginform from "../../containers/Loginform/Loginform";

const Loginpage = () => {
    return(
        <div>
            <Navbar />
            <Loginform />
        <Footer />
        </div>

    );
};

export default Loginpage;
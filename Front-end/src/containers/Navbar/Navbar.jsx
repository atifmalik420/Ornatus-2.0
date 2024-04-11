import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_ornatus.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import categoryService from "../../services/CategoryService";
import "./navbar.css";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoryService.getCategories().then((data) => {
      if (Array.isArray(data)) {
        console.log("Data is an Array Already!");
        setCategories(data);
        setLoading(false);
      } else if (typeof data === "object") {
        console.log("Data is an Object and is converted!");
        const productsArray = Object.values(data);
        setCategories(productsArray);
        setLoading(false);
      } else {
        console.error("Data received is not in expected format:", data);
      }
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!categories || categories.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="Navbar_main">
      <div className="Navbar_header">
        <div className="Navbar_logo">
          <Link to={"/"}>
            <img src={logo} alt="logo_ornatus" className="ornatus-logo" />
          </Link>
        </div>
        <div className="Navbar_searchbar">
          <form role="search">
            <input
              id="searchInput"
              className="Navbar_search-input"
              type="search"
              placeholder="Search"
            />
            <IoIosSearch type="submit" className="Navbar_search-icon" />
          </form>
        </div>
        <div className="Navbar_icons">
          <div className="Navbar_home">
            <Link to={"/"}>
              <IoMdHome className="Navbar_home-icon" />
            </Link>
          </div>
          <div className="Navbar_cart">
            <Link to={"/cart"}>
              <FaShoppingCart className="Navbar_cart-icon" />
            </Link>
          </div>
          <div className="Navbar_profile">
            <Link to={"/account/login"}>
              <FaUser className="Navbar_profile-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="Navbar_categories">
        {categories.map((category, index) => (
          <div className="Navbar_category" key={index}>
            <Link to={`/collections/${category['categories']}`}>
              <span className="Navbar_category-Text">{category['categories']}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

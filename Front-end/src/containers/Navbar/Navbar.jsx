import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_ornatus.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import categoryService from "../../services/CategoryService";
import userService from "../../services/UserService"; 
import productService from "../../services/ProductsService";
import "./navbar.css";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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

  const handleSearch = async () => {
    try {
      const response = await productService.searchProducts(searchTerm);
      console.log("Search results:", response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
  };

  const handleSuggestionClick = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
  };
  if (loading) {
    return <p>Loading...</p>;
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
          <form onSubmit={handleSearch} role="search">
            <input
              id="searchInput"
              className="Navbar_search-input"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={onChange}
            />
            <IoIosSearch type="submit" className="Navbar_search-icon" />
          </form>
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
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
          {userService.isLoggedIn() ? (<Link to={"/account"}>
              <FaUser className="Navbar_profile-icon" />
            </Link>):(<Link to={"/account/login"}>
              <FaUser className="Navbar_profile-icon" />
            </Link>)}
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
      {searchResults.length > 0 && (
        <div className="Navbar_search-results">
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/logo_ornatus.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
//import { RiArrowDropDownLine } from "react-icons/ri";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar_main">
      <div className="Navbar_header">
        <div className="Navbar_logo">
          <Link to="/"><img src={logo} alt="logo_ornatus" /></Link>
          
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
            {" "}
            <Link to="/"><IoMdHome className="Navbar_home-icon" /></Link>
            
          </div>
          <div className="Navbar_cart">
            {" "}
            <Link to="/cart">
              <FaShoppingCart className="Navbar_cart-icon" />
            </Link>
          </div>
          <div className="Navbar_profile">
            {" "}
            <Link to="/login"><FaUser className="Navbar_profile-icon" /></Link>
            
          </div>
        </div>
      </div>
      <div className="Navbar_categories">
        <div className="Navbar_category">

          <NavDropdown
            className="Navbar_dropdown"
            title={<Link to={'/collections/category'}><span className="Navbar_category-Text">Bedroom</span></Link>}
            menuVariant="dark"
          >
            <Link to={'/category'}><NavDropdown.Item>Action</NavDropdown.Item></Link>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Kids</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Living</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Study</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Kitchen</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Office</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Decor</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="Navbar_category">
          <NavDropdown
            className="Navbar_dropdown"
            title={<span className="Navbar_category-Text">Dining</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

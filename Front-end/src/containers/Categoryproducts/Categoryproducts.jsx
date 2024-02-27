import React from "react";
//import { useState } from "react";
import "./categoryproducts.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import prod from "./prod-2.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
//import Card from 'react-bootstrap/Card';
const Categoryproducts = () => {
  const product = {
    photo: prod,
    category: "Bedroom",
    name: "Chelsea King Size Wooden Bed",
    price: "Rs 20,000",
  }
  return (
    <div className="category-main">
      <div className="category-subdiv">
        <div className="breadcrumb-div">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="breadcrumb-item">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" className="breadcrumb-item">
              Shop
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="breadcrumb-item">
              {product.category}
            </Breadcrumb.Item>
          </Breadcrumb>
          <hr className="sepration" />
        </div>

        <div className="filter-sorting-div">
          <div className="filters-div">
            <label htmlFor="" className="filter-label">
              Filters:
            </label>

            <Dropdown className="filter-dropdown">
              <Dropdown.Toggle variant="secondary" className="filter-dropdown">
                Availability
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="filter-dropdown">
              <Dropdown.Toggle variant="secondary" className="filter-dropdown">
                Price
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="filters-div">
            <label htmlFor="" className="filter-label">
              Sort by:
            </label>

            <Dropdown className="filter-dropdown">
              <Dropdown.Toggle variant="secondary" className="filter-dropdown">
                Featured
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
        <div className="products-div">
        <Link to={'/product'}>
        <div className="product-card">
            <img src={product.photo} alt="" className="product-img"/>
            <h6 className="product-name">{product.name}</h6>
            <h6 className="product-price">{product.price}</h6>

        </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Categoryproducts;

import React from "react";
import { useState,useEffect } from "react";
import "./categoryproducts.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import prod from "./prod-2.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import productService from "../../services/ProductsService";
//import Card from 'react-bootstrap/Card';
const Categoryproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        if (Array.isArray(data)) {
          console.log("Data is an Array Already!");
          setProducts(data);
          setLoading(false);
        } else if (typeof data === 'object') {
          console.log("Data is an Object and is converted!");
          const productsArray = Object.values(data);
          setProducts(productsArray);
          setLoading(false);
        } else {
          console.error("Data received is not in expected format:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };
  useEffect(
    getData, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No data available</p>;
  }
  console.log(products);
  console.log(products.entries);
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
              {products.category}
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
        {products.map((product, index) => (
                <Link to={`/products/${product.id}`} key={[product.id]}>
                    <div className="product-card">
                        <img src={prod} alt="" className="product-img" />
                        <h6 className="product-name">{product.name}</h6>
                        <h6 className="product-price">{product.price}</h6>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categoryproducts;

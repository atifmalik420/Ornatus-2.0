import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productService from "../../services/ProductsService";
import "./categoryproducts.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import prod from "./prod-2.png";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Categoryproducts = ({category}) => {
  //const { category } = useParams(); // Get the selected category from URL parameter
  console.log("From the Category Products",category);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityFilter, setAvailabilityFilter] = useState("All");
  const [appliedFilter, setAppliedFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [bestSellingSortOrder, setBestSellingSortOrder] = useState("asc");
  const productsPerPage = 8; 
  const totalPages = Math.ceil(products.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterProducts = (filter) => {
    setAvailabilityFilter(filter);
    setCurrentPage(1);
  };
  const handleSortChange = (order) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const filteredProducts = () => {
    let filtered = [...products];

    if (availabilityFilter === "In Stock") {
      filtered = products.filter((product) => product.stock > 0);
    } else if (availabilityFilter === "Out Of Stock") {
      filtered = products.filter((product) => product.stock === 0);
    }

    return filtered;
  };

  const handleSortByBestSelling = () => {
    setSortOrder("bestselling");
    setCurrentPage(1);
  };

  const handleSortByAlphabeticalAZ = () => {
    setSortOrder("alphabeticalAZ");
    setCurrentPage(1);
  };

  const handleSortByAlphabeticalZA = () => {
    setSortOrder("alphabeticalZA");
    setCurrentPage(1);
  };

  const sortedProducts = () => {
    let sorted = [...filteredProducts()];

    if (sortOrder === "alphabeticalAZ") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    } else if (sortOrder === "alphabeticalZA") {
      sorted.sort((a, b) => b.name.localeCompare(a.name, undefined, { sensitivity: 'base' }));
    }  
    if (sortOrder === "bestselling") {
      sorted.sort((a, b) => {
        const salesA = a.sales || 0;
        const salesB = b.sales || 0;
        return bestSellingSortOrder === "asc" ? salesA - salesB : salesB - salesA;
      });
    } else {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("Rs ", "").replace(",", ""));
        const priceB = parseFloat(b.price.replace("Rs ", "").replace(",", ""));

        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
      });
    }  
    const indexOfLastSortedProduct = currentPage * productsPerPage;
    const indexOfFirstSortedProduct = indexOfLastSortedProduct - productsPerPage;
  
    return sorted.slice(indexOfFirstProduct, indexOfLastProduct);
  };
  useEffect(() => {
    productService
      .getProductsByCategory(category)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);// Re-fetch products when the category changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available for this category</p>;
  }
  

  return (
    <div className="category-main">
      
      <div className="category-subdiv">
        {/* <div className="breadcrumb-div">
          <Breadcrumb>
            <Breadcrumb.Item href="#" className="breadcrumb-item">
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
        </div> */}

        <div className="filter-sorting-div">
          <div className="filters-div">
            <label htmlFor="" className="filter-label">
              Filters:
            </label>

          <Dropdown className="filter-dropdown">
            <Dropdown.Toggle variant="secondary" className="filter-dropdown">
              Availability <RiArrowDropDownLine className="drop-icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => filterProducts("All")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => filterProducts("In Stock")}>In Stock</Dropdown.Item>
              <Dropdown.Item onClick={() => filterProducts("Out Of Stock")}>Out Of Stock</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="filter-dropdown">
        <Dropdown.Toggle variant="secondary" className="filter-dropdown">
          Price
          <RiArrowDropDownLine className="drop-icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSortChange("asc")}>Low To High</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("desc")}>High To Low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    
          </div>
          <div className="filters-div">

            <Dropdown className="filter-dropdown">
              <Dropdown.Toggle variant="secondary" className="filter-dropdown">
                Sort By<RiArrowDropDownLine className="drop-icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleSortByBestSelling}>Best Selling</Dropdown.Item>
                <Dropdown.Item onClick={handleSortByAlphabeticalAZ}>Alphabetically, A-Z</Dropdown.Item>
                <Dropdown.Item onClick={handleSortByAlphabeticalZA}>Alphabetically, Z-A</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
        

        <Row md={4}>
        {products.map((product) => (
          <Col key={product.id}>
            <Link to={`/collections/${category}/products/${product.id}`}>
              {/* Adjust your card component here */}
              <div className="product-card">
                <img src={product.photo} alt="" className="product-img" />
                <h6 className="product-name">{product.name}</h6>
                <h6 className="product-price">{product.price}</h6>
              </div>
            </Link>
          </Col>
        ))}
      </Row>

        
        <Pagination className="custom-pagination pagination-container">
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      </div>
    </div>
  );
};

export default Categoryproducts;
import React, { useState } from "react";
import { useEffect} from "react";
import axios from 'axios';
import "./productdetail.css";
import Prod1 from "./prod-1.png";
import Prod2 from "./prod-2.png";
import { LuArrowRightCircle } from "react-icons/lu";
import { LuArrowLeftCircle } from "react-icons/lu";
//import { TbZoomScan } from "react-icons/tb";
import { VscZoomIn } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Productdetail = (props) => {
  const images1 = [Prod1, Prod2, Prod2];
  const [data, setData] = useState([]); // Initialize state with an empty array
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/product');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // useEffect to mimic componentDidMount behavior
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means it runs only once on mount
  

  const productdet = useState({
    name: data[0].name,
    id: data[0].id,
    specifications: [
      "Size: 35.4” W x 83” D x 49” H (Inches)",
      "Material: Mahogany wood/veneer",
      "Finish: Walnut finish",
      "Legs: Wooden",
      "Recommended Mattress Size: 78” L x 72” W x 8” H – Sold Separately",
    ],
    keyfeatures: [
      "High-Quality Materials: crafted from high-quality solid Mahogany wood/veneer which is highly durable, long-lasting, and easy to maintain",
      "Robust Construction: Sturdy MDF structure offers durability while wooden legs provide additional stability",
      "Elegant Design: The solid wood with walnut finish exudes modern elegance with its natural wood grain feel",
      "Striking Appearance: diagonal grooved design embellished with antique golden metallic motifs gives a striking appearance that blends seamlessly with any interior",
    ],

    description:
      data[0].description,
    price: data[0].price,
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  //const [isZoomed, setIsZoomed] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images1.length) % images1.length
    );
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  else
  return (
    <div className="prod-detail-main">
      {console.log(data)}
      {console.log(data[0].price)}
      {console.log(data[0].name)}
      {console.log(data[0].description)}
      <div className="prod-images">
        <div className="prod-view">
          <div className="side-images">
            {images1.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  selectedImageIndex === index ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          <div className="main-image">
            <div className="zoom-icon-div">
              <VscZoomIn className="zoom-icon" />
            </div>
            <img
              key={selectedImageIndex}
              src={images1[selectedImageIndex]}
              alt={`Product ${selectedImageIndex + 1}`}
              className="main-image"
            />

            <div className="navigation-arrows">
              <LuArrowLeftCircle
                className="arrow-left"
                onClick={handlePrevImage}
              />
              <LuArrowRightCircle
                className="arrow-right"
                onClick={handleNextImage}
              />
            </div>
          </div>
        </div>

        <div className="prod-buttons">
          <button className="d3-button">View 3D Model</button>
          <button className="ar-button">View in AR</button>
        </div>
      </div>

      <div className="prod-details">
        <h1 className="prod-name">{productdet.name}</h1>
        <div>
          <h5 className="prod-id">{productdet.id}</h5>
          <h5 className="prod-id">Shipping calculated at checkout.</h5>
        </div>
        <hr className="sepration" />

        <div className="add-to-cart">
          <div className="quantity-button">
            <button
              className="quantity-button__decrease"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="quantity-button__quantity">{quantity}</span>
            <button
              className="quantity-button__increase"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <Link to={'/cart'}>
          <button className="add-to-cart-button">Add to Cart</button>
          </Link>
        </div>

        <p className="delivery-para">
          Delivered in 20 to 30 working days Our Delivery officer shall call you
          to communicate the exact delivery time lines.
        </p>

        <p className="prod-description">{productdet.description}</p>
        <div className="specifications-div">
          <h1 className="specifications-heading">
            <b>Specifications</b>
          </h1>
          <ul className="prod-specifications">
            {productdet.specifications.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="key-features-div">
          <h1 className="key-features-heading">
            <b>Key Features</b>
          </h1>
          <ul className="key-features">
            {productdet.keyfeatures.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <hr className="sepration" />

        <div className="prod-reviews-div">
          <h1 className="reviews-heading">
            <b>Customer Reviews</b>
          </h1>

          <div className="ratings-div">
            <h2 className="rating">Rating</h2>

            <div className="star-rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label htmlFor="star5" title="5 stars"></label>

              <input type="radio" id="star4" name="rating" value="4" />
              <label htmlFor="star4" title="4 stars"></label>

              <input type="radio" id="star3" name="rating" value="3" />
              <label htmlFor="star3" title="3 stars"></label>

              <input type="radio" id="star2" name="rating" value="2" />
              <label htmlFor="star2" title="2 stars"></label>

              <input type="radio" id="star1" name="rating" value="1" />
              <label htmlFor="star1" title="1 star"></label>
            </div>
          </div>

          <div className="review-title-div">
            <h4 className="review-title">Review Title</h4>
            <input
              type="text"
              className="review-title-input"
              placeholder="Title"
            />
          </div>

          <div className="review-body-div">
            <h4 className="body-of-review">Body of review</h4>
            <textarea type="text" className="body-of-review-input" />
          </div>
          <button className="submit-review-button">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;

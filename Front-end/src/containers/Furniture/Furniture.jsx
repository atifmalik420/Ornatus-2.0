import React from "react";
import "./furniture.css";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";

const Furniture = () => {
  return (
    <div className="furniture-main">
      <div className="furniture-sub">
        <div className="furniture-upper">
          <img src={photo1} alt="" />
          <div className="upper-text-div">
            <h1 className="furniture-main-text">Discover Your Comfort Zone</h1>
            <p className="furniture-sub-text">
              Create plush and inviting seating spaces with our premium range of
              sofa sets. Available in a variety of styles and designs with
              unmatched comfort that flawlessly blend into any living room,
              lounge and more.
            </p>
          </div>
        </div>
        <div className="furniture-lower">
          <div className="lower-text-div">
            <h1 className="furniture-main-text">
              Accent Your Space with Our Exciting Range Home Decor Accessories
            </h1>
            <p className="furniture-sub-text">
              Embrace the art of tasteful living with our striking home decor
              accessories and breathe a new life into any space. From
              mesmerizing accents to charming embellishments, discover the
              secret to infusing allure into every corner of your living space.
            </p>
          </div>
          <img src={photo2} alt="" className="furniture-img-2" />
        </div>
      </div>
    </div>
  );
};

export default Furniture;

import React from "react";
import "./services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { LuAlarmClock } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
const Services = () => {
  return (
    <div className="services-main">
      <div className="service-div">
        <TbTruckDelivery className="service-icon" />
        <h1 className="service-title">
          <b>Doorstep Delivery</b>
        </h1>
        <p className="service-text">Receive purchases at your doorstep</p>
      </div>

      <div className="service-div">
        <LuAlarmClock className="service-icon" />
        <h1 className="service-title">
          <b>After Sale Support</b>
        </h1>
        <p className="service-text">
          All our products come with our promise of long-term after-sales
          service
        </p>
      </div>

      <div className="service-div">
        <FaBoxOpen className="service-icon" />
        <h1 className="service-title">
          <b>International Standard</b>
        </h1>
        <p className="service-text">
          Our products are created locally and adhere to global manufacturing
          standards
        </p>
      </div>

      <div className="service-div">
        <AiFillTool className="service-icon" />
        <h1 className="service-title">
          <b>Assembly Assistance</b>
        </h1>
        <p className="service-text">
          After delivery, our team of experts help you assemble your products in
          your location for maximum ease
        </p>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./checkout.css";
import prod from "./prod-2.png";
const Checkout = () => {
  const product = {
    photo: prod,
    name: "Chelsea King Size Wooden Bed",
    price: "Rs 20,000",
  };
  return (
    <div className="checkout-main">
      <div className="checkout-info">
        <div className="checkout-contact-info">
          <h4 className="contact">Contact</h4>
          <input
            type="text"
            className="contact-input"
            placeholder="Email or Mobile number"
          />
          <label htmlFor="" className="contact-label">
            <input type="checkbox" className="contact-checkbox" /> Email me with
            news and offers
          </label>
        </div>

        <div className="checkout-delivery-info">
          <h4 className="delivery">Delivery</h4>
          <div className="name-fields">
            <input
              type="text"
              placeholder="First Name"
              className="input-first-name"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-last-name"
            />
          </div>

          <input
            type="text"
            className="delivery-address-info"
            placeholder="Address"
          />
          <div className="name-fields">
            <input
              type="text"
              placeholder="City"
              className="input-first-name"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="input-last-name"
            />
          </div>
          <input
            type="text"
            className="delivery-address-info"
            placeholder="Phone"
          />
          <label htmlFor="" className="contact-label">
            <input type="checkbox" className="contact-checkbox" /> Save info for
            next time
          </label>
        </div>

        <div className="checkout-payment-info">
          <h4 className="payment">Payment</h4>
          <h6 className="payment">All transactions are secure and protected</h6>

          <form className="payment-method-form">
            <label htmlFor="debitCreditCard" className="payment-label">
              <input
                type="radio"
                id="debitCreditCard"
                name="paymentMethod"
                className="payment-radiobtn"
              />{" "}
              Debit-Credit card
            </label>
            <br />

            <label htmlFor="cashOnDelivery" className="payment-label">
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                className="payment-radiobtn"
              />{" "}
              Cash on delivery
            </label>
            <br />

            <label htmlFor="bankDeposit" className="payment-label">
              <input
                type="radio"
                id="bankDeposit"
                name="paymentMethod"
                className="payment-radiobtn"
              />{" "}
              Bank Deposit
            </label>
          </form>
        </div>

        <div className="checkout-billing-info">
          <h4 className="payment">Billing Address</h4>

          <form className="billing-address-form">
            <label htmlFor="debitCreditCard" className="billing-label">
              <input
                type="radio"
                id=""
                name="billingmethod"
                className="billing-radiobtn"
              />{" "}
              Same as shipping address
            </label>
            <br />

            <label htmlFor="cashOnDelivery" className="billing-label">
              <input
                type="radio"
                id=""
                name="billingmethod"
                className="billing-radiobtn"
              />{" "}
              Use a different billing address
            </label>
          </form>
        </div>

        <button className="complete-order-btn">Complete Order</button>
      </div>

      <div className="checkout-items-bill">
        <div className="checkout-items">
          <img src={product.photo} alt="" className="checkout-item-image" />
          <h6 className="checkout-item-name">{product.name}</h6>
        </div>

        <div className="checkout-items-bill">
          <div className="checkout-subtotal">
            <h6 className="checkout-subtotal-title">Subtotal</h6>
            <h6 className="checkout-subtotal-amount">{product.price}</h6>
          </div>

          <div className="checkout-shipping">
            <h6 className="checkout-subtotal-title">Shipping</h6>
            <h6 className="checkout-subtotal-amount">Free</h6>
          </div>

          <div className="checkout-total">
            <h6 className="checkout-subtotal-title">Total </h6>
            <h6 className="checkout-subtotal-amount">{product.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

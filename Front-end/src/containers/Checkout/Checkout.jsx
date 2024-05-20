import React from "react";
import "./checkout.css";
import userService from "../../services/UserService";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import orderService from "../../services/OrderService";
const Checkout = () => {
  const apiUrl = 'http://localhost:4000/api';
  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  const makePayment = async () => {
    
    const stripe = await loadStripe('pk_test_51MKzBiAY8SZCVCcYbvKyRhl6OWUuKO1ZrnwtuEC68ejd2lCbSBi2dhapAkQuZFHpx9QZMCpMwnPSLe8omPDRqWje00Z1eeK9h0');
    const body = {
      products: cart
    };
    console.log("Body from the make Payment",body)
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer sk_test_51MKzBiAY8SZCVCcYbZCfwC1jmDREi7UP3KuHpq9dMDpzSYJOZJDrXkunhG0ws6xV6byu3XNckX1ruOQN7IwhxHyH00hpCXTHhT`
    };
    console.log("Stringify Body is ",JSON.stringify(body));
    const response = await fetch(`${apiUrl}/orders/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
  
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });
    flag = true;
    if (result.error) {
      console.log(result.error);
    }
  }
  const createOrder = () => {
    
    if (userService.isLoggedIn()) {
      const user_id = userService.getLoggedInUser().id;
      console.log("The value of id of user is ",user_id);
        orderService
        .addOrder({
          user_id: user_id,
          amount: getTotal().totalPrice,
          items: cart
        })
        .then((response) => {
          
        })
        .catch((error) => {
          console.error("Error posting Order:", error);
        });
    }
    alert("Order has been placed successfully!");
  };
  var flag = false;
  return (
    <div className="checkout-main">
      <div className="checkout-info">
        <div className="checkout-contact-info">
          <h4 className="contact">Contact</h4>
          <input
          required
            type="text"
            className="contact-input"
            placeholder="Email or Mobile number"
            value={userService.getLoggedInUser().email}
          />
          {console.log("The value of the token in checkout is ",userService.getLoggedInUser())}
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
              required
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
                onClick={makePayment}
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
{console.log(flag)}
        <button className="complete-order-btn" onClick={createOrder} disabled={!flag}>Complete Order</button>
      </div>

      <div className="checkout-items-bill">
        {/* <div className="checkout-items">
          <img src={product.photo} alt="" className="checkout-item-image" />
          <h6 className="checkout-item-name">{product.name}</h6>
        </div> */}
        {cart?.map((item) => (
            <CheckoutItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        <div className="checkout-items-bill">
          {/* <div className="checkout-subtotal">
            <h6 className="checkout-subtotal-title">Subtotal</h6>
            <h6 className="checkout-subtotal-amount">{product.price}</h6>
          </div> */}

          <div className="checkout-shipping">
            <h6 className="checkout-subtotal-title">Shipping</h6>
            <h6 className="checkout-subtotal-amount">Free</h6>
          </div>
          
          <div className="checkout-total">
            <h6 className="checkout-subtotal-title">Total </h6>
            <h6 className="checkout-subtotal-amount">Rs {getTotal().totalPrice}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

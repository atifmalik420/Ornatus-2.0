import React, { useState } from 'react';
import './cart.css'
import table from './stable.png'
const Cart = () => {
    const [product, setProduct] = useState({
        photo: table,
        name: 'Chelsea King Size Wooden Bed',
        price: 'Rs 20,000',
      });

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
    return(
        <div className="cart-main">
            <div className="cart-items">
                <h1 className="your-cart">Your Cart</h1>

                <div className="cart-header-1">
                    <h6 className="cart-headings">Product</h6>
                
                    <div className="cart-header-2">
                        <h6 className="cart-headings">Quantity</h6>
                        <h6 className="cart-headings">Total</h6>
                    </div>
                </div>

                <hr className="items-sepration"/>

                <div className="cart-item">

                    <div className="cart-product">
                    <img src={product.photo} alt={product.name} className="cart-prod-img" />
                    <h2 className="cart-prod-name">{product.name}</h2>

                    </div>

                    <div className="cart-prod-QT">

                    <div className="quantity-button">
                    <button className="quantity-button__decrease" onClick={decreaseQuantity}>
                     -
                    </button>
                    <span className="quantity-button__quantity">{quantity}</span>
                    <button className="quantity-button__increase" onClick={increaseQuantity}>
                    +
                    </button>
                    </div>

                    <h2 className="cart-prod-price">{product.price}</h2>

                    </div>

                </div>
                <br />

                <h2 className="cont-shop">Continue Shopping</h2>

            </div>

            <div className="cart-order-summary">
                <h1 className="order-summary">Order Summary</h1>

                <div className="notes">
                    <h6 className="add-note">Add notes</h6>
                    <textarea type="text"  className="notes-field" placeholder='Notes'/>

                </div>

                <div className='subtotal'>

                    <h4 className='subtotal'>Subtotal</h4>
                    <h4 className='subtotal'>{product.price}</h4>
                </div>

                <button className='checkout-button'>Checkout</button>



            </div>

        </div>
    );
};

export default Cart;
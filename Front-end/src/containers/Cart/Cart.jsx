import React from 'react';
import './cart.css'
//import table from './stable.png'
//import { Link } from 'react-router-dom';
import Total from './Total'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cart = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
      </div>

    </div>
  )

//     const [product] = useState({
//         photo: table,
//         name: 'Chelsea King Size Wooden Bed',
//         price: 'Rs 20,000',
//       });

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//     return(
//         <div className="cart-main">
//             <div className="cart-items">
//                 <h1 className="your-cart">Your Cart</h1>

//                 <div className="cart-header-1">
//                     <h6 className="cart-headings">Product</h6>
                
//                     <div className="cart-header-2">
//                         <h6 className="cart-headings">Quantity</h6>
//                         <h6 className="cart-headings">Total</h6>
//                     </div>
//                 </div>

//                 <hr className="items-sepration"/>

//                 <div className="cart-item">

//                     <div className="cart-product">
//                     <img src={product.photo} alt={product.name} className="cart-prod-img" />
//                     <h2 className="cart-prod-name">{product.name}</h2>

//                     </div>

//                     <div className="cart-prod-QT">

//                     <div className="quantity-button">
//                     <button className="quantity-button__decrease" onClick={decreaseQuantity}>
//                      -
//                     </button>
//                     <span className="quantity-button__quantity">{quantity}</span>
//                     <button className="quantity-button__increase" onClick={increaseQuantity}>
//                     +
//                     </button>
//                     </div>

//                     <h2 className="cart-prod-price">{product.price}</h2>

//                     </div>

//                 </div>
//                 <br />
//                 <Link to={'/collections/all'}>
//                     <h2 className="cont-shop">Continue Shopping</h2>
//                 </Link>
//             </div>

//             <div className="cart-order-summary">
//                 <h1 className="order-summary">Order Summary</h1>

//                 <div className="notes">
//                     <h6 className="add-note">Add notes</h6>
//                     <textarea type="text"  className="notes-field" placeholder='Notes'/>

//                 </div>

//                 <div className='subtotal'>

//                     <h4 className='subtotal'>Subtotal</h4>
//                     <h4 className='subtotal'>{product.price}</h4>
//                 </div>
//                 <Link to={'/checkout'}>
//                     <button className='checkout-button'>Checkout</button>
//                 </Link>


//             </div>

//         </div>
//     );
};

export default Cart;
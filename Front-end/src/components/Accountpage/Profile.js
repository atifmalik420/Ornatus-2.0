import React from "react";
import './profile.css';

const Profile = () => {
   
    const orders = [
        {
            user_id : "AB001",
            order_id: "BD001",
            amount: "Rs. 10,000",
        },
        {
            user_id : "AB002",
            order_id: "BD003",
            amount: "Rs. 10,000",
        }
    ];

    return(
        <div className="profile-main">

            <div className="profile-upper">
                <h1 className="my-acc">My Account</h1>
                <button className="logout-btn">Log out</button>
            </div>

            <hr />

            <div className="profile-lower">
                <h1 className="my-acc">Order History</h1>
                <div className="order-container">
                    {orders.map((order, index) => (
                        <div key={index} className="order">
                            <p>Orderr ID: {order.order_id}</p>
                            <p>User ID: {order.user_id}</p>
                            <p>Amount: {order.amount}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Profile;
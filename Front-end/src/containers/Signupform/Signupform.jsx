import React from "react";
import './signupform.css';
import { FcGoogle } from "react-icons/fc";

const Signupform = () => {
    return(
        <div className="signup-form-main">

            <div className="signup-form">
            <div className="signup-form-top-text">
                    <h2 className="signup">Signup</h2>
                    <h5 className="signup-2">Enter your information below to proceed. If you already have an account, please log in instead.</h5>

                </div>
            
                <div className="input-form">
                    <form action="submit" className="input-form">
                    <div className="name-fields">
                    <input type="text" placeholder="First Name" className="input-first-name"/>
                     <input type="text" placeholder="Last Name" className="input-last-name"/>
                    </div>
                        <input type="text" placeholder="Email Address" className="input-field"/>
                        <input type="password"  placeholder="Password"className="input-field"/>
                        <button className="signup-button">Signup</button>
                    </form>

                

                </div>

                <div className="signup-form-bottom">
                <a href="/signin-with-google" className="google-signup">Signup with Google <FcGoogle /></a>

                <hr className="sepration"/>

                <div>
                <span className="have-acc">Already have an account?</span><a href="/login" className="login-acc">Login</a>
                </div>
                </div>

            </div>

        </div>
    );
};

export default Signupform;
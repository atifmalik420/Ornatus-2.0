import React from "react";
import './loginform.css';
import { FcGoogle } from "react-icons/fc";

const Loginform = () =>{
    return(
        <div className="login-form-main">
           
            <div className="login-form">
                <div className="login-form-top-text">
                    <h2 className="login">Login</h2>
                    <h5 className="login-2">If you have an account, please login.</h5>

                </div>

                <div className="input-form">
                    <form action="submit" className="input-form">
                        <input type="text" placeholder="Email Address" className="input-field"/>
                        <input type="password"  placeholder="Password"className="input-field"/>
                        <button className="login-button">Login</button>
                    </form>

                </div>

                <div className="login-form-bottom">
                <div>
                <a href="/forget-password" className="forgot-pass">Forgot password?</a>
                <a href="/signin-with-google" className="google-login">Login with Google <FcGoogle /></a>
                </div>
                <hr className="sepration"/>

                <div>
                <span className="no-acc">Don't have an account?</span><a href="/register" className="create-acc">Create an Account</a>
                </div>
                </div>



            </div>
            
        </div>
    );
};

export default Loginform;
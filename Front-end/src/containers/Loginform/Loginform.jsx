import React, { useState } from "react";
import './loginform.css';
import { FcGoogle } from "react-icons/fc";
import userService from "../../services/UserService"; 
const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        userService.login(email, password)
            .then(token => {
                console.log("Login successful", token);
                window.location.href = '/';
            })
            .catch(err => {
                setError("Invalid email or password"); // Set error message if login fails
                console.error("Login failed", err);
            });
    };

    return (
        <div className="login-form-main">
            <div className="login-form">
                <div className="login-form-top-text">
                    <h2 className="login">Login</h2>
                    <h5 className="login-2">Already have an account, login!</h5>
                </div>

                <div className="input-form">
                    <form onSubmit={handleLogin} className="input-form">
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            className="input-field" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password"  
                            placeholder="Password" 
                            className="input-field" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                </div>

                <div className="login-form-bottom">
                    <div>
                        <a href="/forget-password" className="forgot-pass">Forgot password?</a>
                        <a href="/signin-with-google" className="google-login">Login with Google <FcGoogle /></a>
                    </div>
                    <hr className="separation" />

                    <div>
                        <span className="no-acc">Don't have an account?</span><a href="/account/register" className="create-acc">Create an Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginform;

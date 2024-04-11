import React, { useState } from "react";
import './signupform.css';
import { FcGoogle } from "react-icons/fc";
import userService from "../../services/UserService"; 

const Signupform = ({ history }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        let username = firstName +' '+ lastName;
        userService.register(username, email, password)
            .then(() => {
                window.location.href = '/account/login';
                history.push("/");
            })
            .catch(err => {
                setError("Failed to signup"); // Set error message if signup fails
                console.error("Signup failed", err);
            });
    };

    return(
        <div className="signup-form-main">
            <div className="signup-form">
                <div className="signup-form-top-text">
                    <h2 className="signup">Signup</h2>
                    <h5 className="signup-2">Enter your information below to proceed. If you already have an account, please log in instead.</h5>
                </div>
                <div className="input-form">
                    <form onSubmit={handleSignup} className="input-form">
                        <div className="name-fields">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="input-first-name" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="input-last-name" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
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
                        <button type="submit" className="signup-button">Signup</button>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="signup-form-bottom">
                    <a href="/account/signin-with-google" className="google-signup">Signup with Google <FcGoogle /></a>
                    <hr className="separation"/>
                    <div>
                        <span className="have-acc">Already have an account?</span>
                        <a href="/account/login" className="login-acc">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signupform; 
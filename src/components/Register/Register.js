import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="Name" id="" placeholder="Your Name" />
                    <br />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>--------------------or-----------------------</div>
                <button className="btn-regular">google log in</button>
            </div>
        </div>
    );
};

export default Register;
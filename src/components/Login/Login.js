import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignInUsing } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // console.log("come in soon", location.state?.from)
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        googleSignInUsing()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to ema john e-commerce? <Link to="/register">Create Account</Link></p>
                <div>----------------------or--------------------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">google sign in</button>
            </div>
        </div>
    );
};

export default Login;
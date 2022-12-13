import React from 'react';
import './sign-in-style.css';

function signInPage() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="login-form">
                    <form className="login">
                        <div className="login-form-wrapper">
                            <h1 className="login-form-title">Sign In</h1>
                            <p className="login-form-subtitle">it is nice you back to us</p>
                        </div>
                        <div className="col-3">
                            <input className="effect-1" type="text" placeholder="Enter your username" />

                        </div>
                        <div className="col-3">
                            <input className="effect-1" type="password" placeholder="Enter your password" />

                        </div>
                        <div className="remember-me-wrapper">
                            <div className="remember-me-title">Remember me?</div>
                            <div className="remember-me-body">
                                <input type="checkbox" id="checkbox2" />
                            </div>
                        </div>
                        <div className="login-btn-wrapper">
                            <button className="login-btn">Sign in</button>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <p className="dontHaveAccountTest">
                            You don't have account yet ? {/*<Link to={PATH.REGISTRATION}>Sign up here now!!!</Link>*/}
                        </p>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default signInPage;
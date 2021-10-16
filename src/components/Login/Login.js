import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
      <div className="login-form">
        <div>
          <h2>Login</h2>
          <form action="onSubmit">
            <input type="email" name="" id="" placeholder="Your Email" />
            <br />
            <input type="password" name="" id="" placeholder="Your Password" />  <br />
            <input type="submit" value="submit" />
          </form>
          <p>
            New to Ema-John?
            <Link to="/register">Create Account</Link>
          </p>
          <div>----------or----------</div>
          <button className="btn-regular">Google Sign In</button>
        </div>
      </div>
    );
};

export default Login;
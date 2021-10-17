import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" id="email" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name=""
            id="password"
            placeholder="Your Password"
          />{" "}
          <br />
          <button className="btn btn-regular">Submit</button>
        </form>
        <p className="login-form">
          New to Ema-John?
          <Link to="/register">Create Account</Link>
        </p>
        <div>----------or----------</div>
        <button className="btn-regular" onClick=
        {handleGoogleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Register: Please Create Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="password" name="" id="" placeholder="Re-Your Password" />
          <br />
          <button className="btn btn-regular">Submit</button>
        </form>
        <p>
          Already have an account? <br />
          <Link to="/login">
            <button className="btn btn-regular">Login</button>
          </Link>{" "}
        </p>
        <div>----------or---------</div>
        <button 
          className="btn-regular"
          onClick={signInUsingGoogle}
          >Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div  className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form action="onSumit">
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" placeholder="Your Passeord" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Your Passeord" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <div>----------or---------</div>
                <button className="btn btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;
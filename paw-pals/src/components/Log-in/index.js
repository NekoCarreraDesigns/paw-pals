import React from "react";
import "./style.css";

function Login() {
  return (
    <div>
      <div className='log-in-card-outer'>
        <div className='log-in-card-inner'>
          <h1 className='log-in-header'>Please Log In</h1>
          <input
            className='user-log-in-input-firstName'
            placeholder='First Name'
            type='text'
          />
          <br />
          <input
            className='user-log-in-input-lastName'
            placeholder='Last Name'
            type='text'
          />
          <br />
          <input
            className='user-log-in-input-password'
            placeholder='Enter Password'
            type='password'
          />
          <br />
          <button className='log-in-submit-button'>Submit</button>
          <a className='register-link' href='/register'>
            <h2 className='log-in-header-1'>New here? Please sign up!</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

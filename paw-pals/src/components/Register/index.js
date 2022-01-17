import React from "react";
import "./style.css";

function Register() {
  return (
    <div>
      <div className='outer-register-card'>
        <div className='inner-register-card'>
          <h1 className='register-header'>
            Hello New User, Please Register An Account.
          </h1>
          <input
            type='text'
            className='user-register-input-firstName'
            placeholder='First Name'
          />
          <br />
          <input
            type='text'
            className='user-register-input-lastName'
            placeholder='Last Name'
          />
          <br />
          <input
            type='password'
            className='user-register-input-password'
            placeholder='Please Choose a Password'
          />
          <br />
          <input
            type='password'
            className='user-register-input-password'
            placeholder='Re-type Password Please'
          />
          <br />
          <a href='/profile-generator'>
            <button
              type='submit'
              className='user-register-button'
              reDirect='/profile-generator'>
              Submit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;

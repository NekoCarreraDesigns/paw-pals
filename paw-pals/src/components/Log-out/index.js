import React from "react";
import "./style.css";

function Logout() {
  return (
    <div>
      <div className='outer-logout-card'>
        <div className='inner-logout-card'>
          <h1 className='logout-header'>
            What would you like to do? Log in or Log out
          </h1>
          <a className='log-in-link' label='Log-in' href='/log-in'>
            <i class='fas fa-sign-in-alt'></i>
          </a>
          <a className='log-out-link' href='/log-out-message'>
            <i class='fas fa-sign-out-alt'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logout;

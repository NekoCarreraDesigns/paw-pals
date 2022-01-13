import React from "react";
import "./style.css";

function ProfileNavbar() {
  return (
    <div className='profile-navbar'>
      <h1 className='profile-navbar-header'>View Other Users or Dogs</h1>
      <nav>
        <a className='profile-navbar-link' href='/user-view'>
          <i class='fas fa-users'></i>
        </a>
        <a className='profile-navbar-link' href='/dogs-view'>
          <i class='fas fa-paw'></i>
        </a>
      </nav>
    </div>
  );
}

export default ProfileNavbar;

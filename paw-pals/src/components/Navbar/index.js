import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className='navbar'>
      <a className='navbar-link' href='/'>
        {" "}
        <i className='fas fa-home'></i>
      </a>{" "}
      <a className='navbar-link-1' href='/search'>
        <i className='fas fa-search'></i>
      </a>{" "}
      <a className='navbar-link-2' href='/adopt'>
        {" "}
        <i className='fas fa-dog'></i>
      </a>{" "}
      <a className='navbar-link-3' href='/dog-parks'>
        {"   "}
        <i className='fas fa-cloud-sun'></i>
      </a>
      {"  "}
      <a className='navbar-link-4' href='/profile'>
        <i class='fas fa-user'></i>
      </a>
    </div>
  );
}

export default Navbar;
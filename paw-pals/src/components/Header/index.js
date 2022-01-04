import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <h1 className='page-header'>
        {" "}
        <img alt='dog' className='dog-left' src='dog.png'></img> Puppy Pals{" "}
        <img alt='dog' className='dog-right' src='dog.png'></img>
      </h1>
    </div>
  );
}

export default Header;

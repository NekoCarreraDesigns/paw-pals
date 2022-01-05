import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className='page-footer'>
        <small className='footer-text'>&copy; 2021 Neko Carrera Designs</small>
      </div>
      <div>
        Icons made by{" "}
        <a
          href='https://www.flaticon.com/authors/smashicons'
          title='Smashicons'>
          Smashicons
        </a>{" "}
        from{" "}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;

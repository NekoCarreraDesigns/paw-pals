import React from "react";
import "./style.css";

function Search() {
  return (
    <div>
      <div>
        <input className='user-search' type='text' placeholder='Search Users' />
        <input className='dogs-search' type='text' placeholder='Search Dogs' />
        <button className='search-button'>Search</button>
      </div>
      <div></div>
    </div>
  );
}

export default Search;

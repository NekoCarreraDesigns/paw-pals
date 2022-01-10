import React from "react";
import RangeSlider from "../Range-Slider/index";
import "./style.css";

function Search() {
  return (
    <div>
      <div>
        <input className='user-search' type='text' placeholder='Search Users' />
        <input className='dogs-search' type='text' placeholder='Search Dogs' />
        <button className='search-button'>Search</button>
      </div>
      <div>
        <h1 className='filter-header'>Filter Options</h1>
        <h2 className='breed-filter'>Filter by breed</h2>
        <input className='breed-checkbox' type='checkbox' /> Akita
        <input className='breed-checkbox' type='checkbox' /> Terrier
        <input className='breed-checkbox' type='checkbox' /> Pitbull
        <input className='breed-checkbox' type='checkbox' /> Shepherd
        <input className='breed-checkbox' type='checkbox' /> Retriever
        <input className='breed-checkbox' type='checkbox' /> Bulldog
        <input className='breed-checkbox' type='checkbox' /> Shiba-inu
        <input className='breed-checkbox' type='checkbox' /> Labrador
        <input className='breed-checkbox' type='checkbox' /> Beagle
        <input className='breed-checkbox' type='checkbox' /> Schnauzer
        <input className='breed-checkbox' type='checkbox' /> Husky
        <br></br>
        <input className='breed-checkbox' type='checkbox' /> Collie
        <input className='breed-checkbox' type='checkbox' /> Chihuahua
        <input className='breed-checkbox' type='checkbox' /> Spaniel
        <input className='breed-checkbox' type='checkbox' /> Corgi
        <input className='breed-checkbox' type='checkbox' /> Black Mouth Cur
        <input className='breed-checkbox' type='checkbox' /> Great Dane
        <input className='breed-checkbox' type='checkbox' /> Pyrenees
        <input className='breed-checkbox' type='checkbox' /> Malamute
        <input className='breed-checkbox' type='checkbox' /> St. Bernard
        <input className='breed-checkbox' type='checkbox' /> Bernese
      </div>
      <div>
        <h2 className='mix-breed'>Mixed Breed</h2>
        <input
          className='mixed-input'
          type='text'
          placeholder='What Type of Mix'
        />
        <button className='mixed-search-button'>Search</button>
      </div>
      <div>
        <h1 className='dog-age'>Age</h1>
        <input className='age-checkbox' type='checkbox' /> 0-3
        <input className='age-checkbox' type='checkbox' /> 3-6
        <input className='age-checkbox' type='checkbox' /> 6-9
        <input className='age-checkbox' type='checkbox' /> 9-12
        <input className='age-checkbox' type='checkbox' /> 12+
      </div>
      <div>
        <h1 className='distance-filter'>Distance</h1>
        <RangeSlider />
      </div>
    </div>
  );
}

export default Search;

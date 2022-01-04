import React from "react";
import "./style.css";

function Card() {
  return (
    <div className='user-card'>
      <div className='inner-user-card'>
        <img alt='dog' src='IMG_1118.jpg'></img>
        <h1>
          <em>Name: </em> Oliver
        </h1>
        <h1>
          <em>Status: </em> Rescue
        </h1>
        <h1>
          <em>Likes: </em> Pets, snacks, activity
        </h1>
        <h1>
          <em>Dislikes: </em> Children, small dogs
        </h1>
        <h1>
          <em>Personality: </em> Attention whore, protective, very territorial
        </h1>
      </div>
    </div>
  );
}

export default Card;

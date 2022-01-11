import React from "react";
import "./style.css";

const userName = "Bob Loblaw";
const dogName = "Snoopy";

function Profile() {
  return (
    <div>
      <h1 className='profile-header'>Profile</h1>
      <div className='user-information'>
        <h1 className='user-name-header'>{userName}</h1>
        <img
          className='user-photo'
          src='http://placehold.jp/150x150.png'
          alt='user'></img>
        <h1 className='user-name-header'>{userName}</h1>
      </div>
      <div>
        <p className='user-paragraph'>
          Hello my name is {userName}, I am the owner of {dogName}, the coolest
          Beagle on earth. Snoopy loves to play, and loves long walks, where he
          can sniff everything in site. He's the cutest and loves to make new
          friends!
        </p>
        <p className='user-paragraph'>
          <strong>Location:</strong> Denver
        </p>
        <p className='user-paragraph'>
          <strong>Dog(s):</strong> {dogName}
        </p>
        <img
          className='user-dog'
          src='http://placehold.jp/150x150.png'
          alt='dog'></img>
        <p className='user-paragraph'>
          <strong>Favorite Parks:</strong> Carla Madison Dog Park, Greenway
        </p>
      </div>
    </div>
  );
}

export default Profile;

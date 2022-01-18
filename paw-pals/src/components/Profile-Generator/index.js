import React from "react";
import "./style.css";

const userName = "Bob Loblaw";

function ProfileGenerator() {
  return (
    <div>
      <div className='user-profile-generator'>
        <h1 className='user-profile-generator-header'>
          Welcome to Puppy Pals {userName}!
        </h1>
        <p className='user-profile-generator-paragraph'>
          This is where you will create a profile for you and your dog. We will
          take you through it step by step.
        </p>
        <h2 className='step-header'>
          Step One: Please describe yourself and why you love dogs
        </h2>
        <textarea className='user-profile-generator-text'></textarea>
        <h2 className='step-header'>Step Two: Upload a picture of yourself</h2>
        <img
          className='user-profile-generator-image'
          alt='user'
          src='http://placehold.jp/150x150.png'></img>
        <h2 className='step-header'>
          Step Three: Upload a picture of your dog
        </h2>
        <img
          className='user-profile-generator-image'
          alt='dog'
          src='http://placehold.jp/150x150.png'></img>
        <h2 className='step-header'>
          Step Four: What is your dog's name, status, likes, dislikes, and
          personality traits
        </h2>
        <input
          placeholder="What is your dog's name"
          type='text'
          className='user-profile-generator-dog-name?'
        />
        <br />
        <input
          placeholder="What is your dog's status? example: 'rescue', 'foster', 'breeder' "
          type='text'
          className='user-profile-generator-dog-status'
        />
        <br />
        <input
          placeholder='What does your dog like?'
          type='text'
          className='user-profile-generator-dog-likes'
        />
        <br />
        <input
          placeholder='What does your dog dislike?'
          type='text'
          className='user-profile-generator-dog-dislikes'
        />
        <br />
        <input
          placeholder="What is your dog's personality traits"
          type='text'
          className='user-profile-generator-dog-personality'
        />
        <br />
      </div>
    </div>
  );
}

export default ProfileGenerator;

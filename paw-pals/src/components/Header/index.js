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
      <p className='intro-paragraph'>
        {" "}
        Welcome to Puppy Pals, your friendly and fun resource for finding
        playmates for your pup! Here you will find resources available to you: a
        list of local animal shelters, if you are looking to adopt a best
        friend; as well as a map of the local dog parks to go on play dates. You
        can also search profiles of dogs, and users, as well as create and edit
        your own profile. Have fun and stay safe!
      </p>
      <p className='disclaimer-paragraph'>
        <strong>DISCLAIMER:</strong> Puppy Pals is not a dating site! Please
        don't use it as one. We are here for our furry friends so they can
        socialize with other dogs in fun and safe environments. What happens
        between dog owners is between them. This behavior will not be tolerated,
        and users who violate this rule will be banned for life. We would also
        like you to report abuses, and bad behavior off site to the local
        authorities, as well as our safety team. Remember to have fun and stay
        safe! Thanks for using Puppy Pals!
      </p>
      <a href='/log-in'>
        <button className='start-button'>Get Started!</button>
      </a>
    </div>
  );
}

export default Header;

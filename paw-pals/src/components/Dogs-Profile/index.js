import React from "react";
import "./style.css";

function DogsViews() {
  return (
    <>
      <h1 className='dog-view-header'>View Dogs</h1>
      <p className='dog-view-paragraph'>
        Here you will find dog profiles, click on an image to view the dog
        /cards. Please report all bad behavior to the safety team. Remember to
        stay safe and have fun!
      </p>
      <div className='dog-row'>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Oliver</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Lolo</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Snoopy</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Ziggy</h1>
        </div>
      </div>
      <div className='dog-row-1'>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Max</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Riley</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Lucy</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Zeke</h1>
        </div>
      </div>
      <div className='dog-row-2'>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Sunny</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Biscuits</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Wiggles</h1>
        </div>
        <div className='dog-column'>
          <a className='dog-link' href='/cards'>
            <img alt='dog' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='dog-name'>Sparkle</h1>
        </div>
      </div>
    </>
  );
}

export default DogsViews;

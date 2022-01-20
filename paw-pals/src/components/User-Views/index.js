import React, { useState } from "react";
import "./style.css";

function UserViews() {
  const [userState, setUserState] = useState({
    name: "",
    image: "",
  });

  return (
    <>
      <h1 className='user-view-header'>View Users</h1>
      <p className='user-view-paragraph'>
        Here you will find site users, click on an image to view the user
        profile. Please report all bad behavior to the safety team. Remember to
        stay safe and have fun!
      </p>
      <div className='user-row'>
        <div className='user-column'>
          <a className='user-link' href='profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Bob Loblaw</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Becky Basic</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Sammy Somebody</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Billy Bob</h1>
        </div>
      </div>
      <div className='user-row-1'>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Johnny Jams</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Helen Hippie</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Lucy Lameass</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Gary Granola</h1>
        </div>
      </div>
      <div className='user-row-2'>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Donnie Darko</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Heather Hoebag</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Funky Frieda</h1>
        </div>
        <div className='user-column'>
          <a className='user-link' href='/profile'>
            <img alt='user' src='http://placehold.jp/150x150.png'></img>
          </a>
          <h1 className='user-name'>Dunkey Dana</h1>
        </div>
      </div>
    </>
  );
}

export default UserViews;

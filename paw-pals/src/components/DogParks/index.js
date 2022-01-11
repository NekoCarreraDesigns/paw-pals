import React from "react";
import "./style.css";

function DogParks() {
  return (
    <div>
      <h1 className='dog-parks-header'>Dog Parks</h1>
      <p className='dog-parks-paragraph'>
        Here you will find a list of local dog parks where you and other dog
        owners can have a nice day out playing or running around, or sniffing
        everything in site. Please follow the local leash laws. Unlighted dog
        parks are open from sunrise to sundown, lighted dog parks are open from
        5am-11pm. Make sure your dogs have their shots and are registered with
        the local government. Stay safe and have fun!
      </p>
      <ol className='dog-park-list'>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Barnum Dog Park</strong> on Julian
          St. between west 4th avenue and west 5th avenue
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Berkeley Dog Park</strong> Sheridan
          and West 46th avenue
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Carla Madison Dog Park</strong> 2405
          E. Colfax Avenue
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Fuller Dog Park</strong> Franklin
          Street and East 29th avenue
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>
            Green Valley Ranch East Dog Park
          </strong>{" "}
          Jebel and East 45th avenue
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Greenway Dog Park</strong> East 22nd
          avenue and Syracuse street
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Kennedy Dog Park</strong> Hampden
          and South Dayton
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Little Box Car</strong> Broadway and
          Lawrence street
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Lowry Dog Park</strong> East 4th
          place and South Yosemite Way
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Parkfield Dog Park</strong> 53rd
          Avenue and Chambers Road
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Railyard Dog Park</strong> 19th
          avenue and Little Raven Street
        </li>
        <li className='dog-park-list-item-line'>
          <strong className='dog-park-name'>Sonny Lawson Park</strong> 24th
          Street and California
        </li>
      </ol>
    </div>
  );
}

export default DogParks;

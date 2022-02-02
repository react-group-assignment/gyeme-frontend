import React from 'react';
import './Locations.css';

export default function Locations() {
  return(
    <div className='locations-container'>
        <div className='location'>
            <h1>Location 1</h1>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>49 Something Street, Brisbane, QLD</p>
            <a href='/'>View Classes</a>
        </div>
        <div className='location'>
            <h1>Location 2</h1>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>49 Something Street, Brisbane, QLD</p>
            <a href='/'>View Class</a>
        </div>
        <div className='location'>
            <h1>Location 3</h1>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>49 Something Street, Brisbane, QLD</p>
            <a href='/'>View Class</a>
        </div>
    </div>
  )
}

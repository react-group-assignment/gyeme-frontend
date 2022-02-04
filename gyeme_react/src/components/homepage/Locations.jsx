import React from 'react';
import './Locations.css';

export default function Locations() {
  return(
    <>
        <div className='location1'>
            <h2>Lifter Academy</h2>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>Level 3/116 Adelaide St, Brisbane City QLD 4000</p>
            <a href='/'>View Classes</a>
        </div>
        <div className='location2'>
            <h2>The Wide House</h2>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>1600 Pennsylvania Avenue NW, Washington, DC 20500, United States</p>
            <a href='/'>View Classes</a>
        </div>
        <div className='location3'>
            <h2>Gains City</h2>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>2 Jurong East Street 21, 03 - 14, Singapore 609601</p>
            <a href='/'>View Classes</a>
        </div>
    </>
  )
}

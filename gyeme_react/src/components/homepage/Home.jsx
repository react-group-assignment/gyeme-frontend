import React from 'react';
import Locations from './Locations.jsx';
import Classes from './Classes.jsx';
import Trainers from './Trainers.jsx';
import './Home.css';


export default function Home() {
  return(
      <div className='home-container'>
          <div className='home-components'>
          <h1 className='header'>Gyeme Fitness Centers</h1>
            <Classes className='classes' />
            <Locations className='locations' />
            <Trainers className='trainers' />
          <div className='footer'></div>
          </div>
      </div>
  )
}
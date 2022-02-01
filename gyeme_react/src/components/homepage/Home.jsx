import React from 'react';
import Locations from './Locations.jsx';
import './Home.css';
import Classes from './Classes.jsx';
import Trainers from './Trainers.jsx';


export default function Home() {
  return(
      <div className='home-container'>
          <h1>Gyeme Fitness Centers</h1>
          <div className='home-components'>
            <Classes className='classes'/>
            <Locations className='locations' />
            <Trainers className='trainers'/>
          </div>
      </div>
  )
}

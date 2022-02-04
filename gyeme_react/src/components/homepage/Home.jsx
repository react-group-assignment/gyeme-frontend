import React from 'react';
import Classes from './Classes.jsx';
import Locations from './Locations.jsx';
import Trainers from './Trainers.jsx';

import Footer from './Footer.jsx';

import './Home.css';
import Footer from './Footer.jsx'

export default function Home() {

  return (
    <div className='home-container'>
      <div className='home-components'>
        <h1 className='header'>Gyeme Fitness Centers</h1>
        <Classes className='classes' />
        <Locations className='locations' />
        <Trainers className='trainers' />
        <Footer className='footer'/>
      </div>
    </div>
  )
}

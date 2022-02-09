import React, { useContext } from 'react';
import context from '../../appContext';
import './Locations.css';

export default function Locations() {
  const { state: { locations } } = useContext(context)

  return(
    <>
      {locations.map(location => (
        <div id={`location${location.id}`} className='location'>
            <h2>{location.name}</h2>
            <img className='location-img' src='/src/Images/google-placeholder.jpg'></img>
            <p>{location.address}</p>
            <a href='/'>View Classes</a>
        </div>
      ))},
    </>
  )
}

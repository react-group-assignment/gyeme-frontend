import React, { useEffect, useState } from 'react';
import './Locations.css';

export default function Locations() {
  const [locations, setLocations] = useState("")

  const getLocations = async () => {
    try {
      const response = await fetch("http://localhost:5000/locations")
      const jsonData = await response.json()
      setLocations(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <>
      {locations == [] ? <h1>Loading ...</h1> : <>
        {locations.map(location => (
          <div id={`location${location.id}`} className='location'>
            <h2>{location.name}</h2>
            <img className='location-img' src={`/src/Images/location_${location.id}.jpg`}></img>
            <p>{location.address}</p>
            <a href='/classes'>View Classes</a>
          </div>
        ))}
      </>}
    </>
  )
}
import React from 'react';
import { useEffect, useState } from 'react';
import dumbell from './images/dumbell_icon.png'
import './Classes.css'

export default function Classes() {
    const [locations, setLocations] = useState("")
    const [classes, setClasses] = useState("")

    const getLocations = async () => {
        try {
            const locations_response = await fetch("http://localhost:5000/locations")
            const locations_jsonData = await locations_response.json()
            setLocations(locations_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getClasses = async () => {
        try {
            const classes_response = await fetch("http://localhost:5000/classes")
            const classes_jsonData = await classes_response.json()
            setClasses(classes_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getLocations()
        getClasses()
    }, [])

    return (
        <>
            {locations == [] ? <h1>Loading ...</h1> : <>
                {locations.map((location) => (
                    <div id={`homepage-classes${location.id}`} className='homepage-classes-list'>
                        {/* <h3>Classes</h3> */}
                        {classes
                            .filter((gymClass) => gymClass.location_id == location.id)
                            .map(gymClass => (
                                <div className='homepage-class-list'>
                                    <h4>{gymClass.name}</h4>
                                    <img className='dumbell' src={dumbell} alt="dumbell"></img>
                                </div>
                            ))}
                    </div>
                ))}
            </>}
        </>
    )
}

import React from 'react';
import { useEffect, useState } from 'react';
import './Trainers.css';

export default function Trainers() {
    const [locations, setLocations] = useState("")
    const [users, setUsers] = useState("")

    const getLocations = async () => {
        try {
            const locations_response = await fetch("http://localhost:5000/locations")
            const locations_jsonData = await locations_response.json()
            setLocations(locations_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getUsers = async () => {
        try {
            const users_response = await fetch("http://localhost:5000/users")
            const users_jsonData = await users_response.json()
            setUsers(users_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {locations == [] || users == [] ? <h1>Loading ...</h1> : <>
                {locations.map((location) => (
                    <div id={`homepage-trainer-list${location.id}`} className='homepage-trainer-list'>
                        <h3>Trainers</h3>
                        {users
                            .filter((user) => user.location_id == location.id && user.role_id == 2)
                            .map(user => (
                                <h5>{user.username}</h5>
                            ))}
                    </div>
                ))}
            </>}
        </>
    )
}

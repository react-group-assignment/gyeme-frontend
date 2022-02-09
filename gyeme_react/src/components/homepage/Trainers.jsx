import React, { useContext, useEffect } from 'react';
import appContext from '../../appContext';
import './Trainers.css';

export default function Trainers() {
    const { state: { users, locations } } = useContext(appContext)

    console.log(users)
    console.log(locations)
    // console.log(state)

    return (
        <>
            {locations.map((location) => (
                <div id={`homepage-trainer-list${location.id}`} className='homepage-trainer-list'>
                    <h3>Trainers</h3>
                    {users
                        .filter((user) => user.location_id == location.id && user.role_id == 2)
                        .map(trainer => (
                            <a href={'/blogs/' + trainer.id}>{trainer.username}</a>
                        ))}
                </div>
            ))}
        </>
    );
}

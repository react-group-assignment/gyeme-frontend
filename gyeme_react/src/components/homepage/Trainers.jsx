import React, { useContext } from 'react';
import context from '../../context';
import './Trainers.css';

export default function Trainers() {
    const { state: { users, locations } } = useContext(context)

    function isTrainer(user) {
        return user.role_id == 2
    }

    let trainers = users.filter(isTrainer)

    return (
        <>
            {locations.map((location) => (
                <div id={`homepage-trainer-list${location.id}`} className='homepage-trainer-list'>
                    <h3>Trainers</h3>
                    {trainers
                        .filter((trainer) => trainer.location_id == location.id)
                        .map((trainer) => (
                            <a href={'/blogs/' + trainer.id}>{trainer.username}</a>
                        ))}
                </div>
            ))}
        </>
    );
}

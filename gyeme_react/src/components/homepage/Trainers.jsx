import React from 'react'
import { Link } from 'react-router-dom'

export default function TrainerList() {
    function isTrainer(user) {
        return user.role_id == 2 // here I assume the 2nd role to be trainer
        // return user.role_id.name = 'trainer' // alternatively, would this work??
    }

    let trainers = users.filter(isTrainer)

    return (
        <div>
            {locations.map((location, index) => (
                <>
                    <h2>{location.name}</h2>
                    <ul>
                        {trainers
                            .filter((trainer) => trainer.location_id == location.id)
                            .map((trainer) => (
                                <Link to={`/blog/${trainer.id}`}>{trainer.name}</Link>
                            ))}
                    </ul>
                </>
            ))}
        </div>
    );
}


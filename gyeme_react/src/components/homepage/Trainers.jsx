import React from 'react';
import { Link } from 'react-router-dom'
import './Trainers.css';

export default function Trainers() {
    const users = [
        {
            id: 1,
            username: 'Big Chungus',
            password: 'password1',
            role_id: 2,
            location_id: 1
        },
        {
            id: 2,
            username: 'Steroid Steve',
            password: 'password2',
            role_id: 2,
            location_id: 1
        },
        {
            id: 3,
            username: 'David Wideman',
            password: 'password3',
            role_id: 2,
            location_id: 1
        },
        {
            id: 4,
            username: 'Jett Fule',
            password: 'password4',
            role_id: 2,
            location_id: 1
        },
        {
            id: 5,
            username: 'Peter Ennis',
            password: 'password5',
            role_id: 2,
            location_id: 1
        },
        {
            id: 6,
            username: 'Traptimus Prime',
            password: 'password6',
            role_id: 2,
            location_id: 1
        },
        {
            id: 7,
            username: 'Lady Macbuff',
            password: 'password7',
            role_id: 2,
            location_id: 1
        },
        {
            id: 8,
            username: 'Donald Pump',
            password: 'password8',
            role_id: 2,
            location_id: 2
        },
        {
            id: 9,
            username: 'Brodo Bagains',
            password: 'password9',
            role_id: 2,
            location_id: 2
        },
        {
            id: 10,
            username: 'Benchedikt Cumberbench',
            password: 'password10',
            role_id: 2,
            location_id: 2
        },
        {
            id: 11,
            username: 'Tony',
            password: 'password11',
            role_id: 2,
            location_id: 2
        },
        {
            id: 12,
            username: 'Maximus Power',
            password: 'password12',
            role_id: 2,
            location_id: 2
        },
        {
            id: 13,
            username: 'Johnny Bravo',
            password: 'password13',
            role_id: 2,
            location_id: 3
        },
        {
            id: 14,
            username: 'Rocky',
            password: 'password14',
            role_id: 2,
            location_id: 3
        },
        {
            id: 15,
            username: 'Jacked Johnson',
            password: 'password15',
            role_id: 2,
            location_id: 3
        },
        {
            id: 16,
            username: 'The Hammer',
            password: 'password16',
            role_id: 2,
            location_id: 3
        }
    ]

    const locations = [
        {
            id: 1,
            name: 'Lifter Academy',
            address: 'Level 3/116 Adelaide St, Brisbane City QLD 4000'
        },
        {
            id: 2,
            name: 'The Wide House',
            address: '1600 Pennsylvania Avenue NW, Washington, DC 20500, United States'
        },
        {
            id: 3,
            name: 'Gains City',
            address: '2 Jurong East Street 21, 03 - 14, Singapore 609601'
        }
    ]

    function isTrainer(user) {
        return user.role_id == 2 // here I assume the 2nd role to be trainer
        // return user.role_id.name = 'trainer' // alternatively, would this work??
    }

    let trainers = users.filter(isTrainer)

    return (
        <>
            {locations.map((location, index) => (
                <div className='trainer-list'>
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

import React from 'react';
import { useState } from 'react';
import './Notification.css';

export default function Notification() {

    const [notes, setNotes] = useState([
        {
            id: 1,
            text: 'hello there',
            date: '02/02/22'
        },
        {
            id: 2,
            text: "You have a new class with John",
            date: '03/02/22'
        },
        {
            id: 3, 
            text: "Upcoming class soon",
            date: '06/02/22'
        }
    ])

    return(
        <div>
            <div className='note-titles'>
                <h1>Gym Users</h1>
                <h1>Date</h1>
            </div>
            <div>
                { notes.map((note) => (
                    <Note
                        text={note.text}
                        date={note.date}
                    />
                ))}
            </div>
        </div>
    )
}

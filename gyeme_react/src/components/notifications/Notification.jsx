import React, { useContext } from 'react';
import { useState } from 'react';
import gymContext from '../../gymContext';
import './Notification.css';
import Note from './Note.jsx';

export default function Notification() {
    const { state: { notes } } = useContext(gymContext)

    return(
        <div>
            <div className='note-titles'>
                <h1 className='note-title-one'>Messages</h1>
                <h1 className='note-title-two'>Date</h1>
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

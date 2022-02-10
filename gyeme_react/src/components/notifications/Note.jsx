import React from 'react';
import './Note.css'

export default function Note({ text, date }) {
    return(
        <div className='note'>
            <h3 className='note-message'>{text}</h3>
            <h3 className='note-date'>{date}</h3>
        </div>
    )
}

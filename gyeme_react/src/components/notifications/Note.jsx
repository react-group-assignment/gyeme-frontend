import React from 'react';
import './Note.css'

export default function Note({ text, date }) {
    return(
        <div className='note'>
            <h3>{text}</h3>
            <h3>{date}</h3>
        </div>
    )
}

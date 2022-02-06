import React from 'react';
import './User.css'


export default function User({ name, role }) {
  return(
    <div className='user'>
      <h3>{name} - {role}</h3>
      <button>Update</button>
    </div>
  )
}

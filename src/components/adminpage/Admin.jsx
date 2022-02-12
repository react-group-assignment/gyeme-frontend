import React, { useContext } from 'react';
import UserList from './UserList';
import { useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';



export default function Admin() {
    const navigate = useNavigate();

    return(
        <div>
            <div className='titles'>
                <h1>Gym Users</h1>
                <button onClick={() => navigate('/users/new')}>
                    Create New Users
                </button>
            </div>
            <UserList />
        </div>
    )
}

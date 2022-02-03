import React from 'react';
import UserList from './UserList';
import { useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Nathan",
            role: "Trainer"
        },
        {
            id: 2,
            name: "Jordan",
            role: "Member"
        },
        {
            id: 3,
            name: "Ben",
            role: "Member"
        }
    ])

    const navigate = useNavigate()

    const addUser = (username, password, role) => {
        const newUser = {
            id: 4,
            name: username,
            password: password,
            role: role,
        }
        const newUsers = [...users, newUser]
        setUsers(newUsers)
    }

  return(
      <div>
          <div className='titles'>
            <h1>Gym Users</h1>
            <button onClick={() => navigate('/users/new')}>
                Create New Users
            </button>
          </div>
          <UserList users={users}/>
      </div>
  )
}

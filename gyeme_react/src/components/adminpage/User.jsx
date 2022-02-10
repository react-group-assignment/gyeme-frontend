import React, { useContext } from 'react';
import './User.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import gymContext from '../../gymContext';
import EditUser from './EditUser';
import { Fragment } from 'react/cjs/react.production.min';
import { useParams } from 'react-router-dom';


export default function User({ id, name, role_id }) {
  const navigate = useNavigate();
  const params = useParams();
  const { state: { users, roles }, dispatch } = useContext(gymContext);

  function alertFunction() {
    if (confirm("Do you want to delete this user?")) {
      deleteUser()
    } else {
      console.log('canceled')
    }
  }

  async function deleteUser(user_id) {
    const index = users.findIndex(u => u.id === id);
    const res = await fetch(`http://localhost:5000/users:${user_id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    const delUser = await res.json()
    dispatch({
      type: "deleteUser",
      payload: delUser
    })
  }

  function setupEdit(id, name, role) {
    <Fragment key={id}>
      <EditUser 
        id={id}
        user_name={name}
        user_role={role}
      />
    </Fragment>
    navigate(`/users/edit/${id}`)
  }

  function displayRole(role_id) {
    if (role_id == 1) {
      return "Member"
    } else if (role_id == 2) {
      return "Trainer"
    } else if (role_id == 3) {
      return "Admin"
    }
  }

  return(
    <div className='user'>
      <h3>{name} - {displayRole(role_id)}</h3>
      <div className='user-crud-options'>
        <button onClick={() => { 
          setupEdit(id, name, role_id) 
          //navigate(`/users/edit/${id}`) 
          }}>Update</button>
        <div onClick={alertFunction}><AiTwotoneDelete></AiTwotoneDelete></div>
      </div>
    </div>
  )
}

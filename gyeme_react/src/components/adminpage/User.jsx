import React, { useContext } from 'react';
import './User.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import gymContext from '../../gymContext';



export default function User({ id, name, role }) {
  const navigate = useNavigate();
  const { state: { users }, dispatch } = useContext(gymContext);
  

  function alertFunction() {
    if (confirm("Do you want to delete this user?")) {
      deleteUser
    } else {
      console.log('canceled')
    }
  }

  function deleteUser() {
    const index = users.findIndex(u => u.id === id);
    dispatch({
      type: "deleteUser",
      payload: index
    })
  }

  return(
    <div className='user'>
      <h3>{name} - {role}</h3>
      <div className='user-crud-options'>
        <button onClick={() => navigate("/users/new")}>Update</button>
        <div onClick={deleteUser}><AiTwotoneDelete></AiTwotoneDelete></div>
      </div>
    </div>
  )
}

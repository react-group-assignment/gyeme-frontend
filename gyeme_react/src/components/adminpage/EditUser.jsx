import React from 'react';
import './NewUser.css'
import { useState } from 'react'
import gymContext from '../../gymContext';
import { useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function EditUser({ id, user_name, user_role}) {
  const params = useParams();
  const { state: { users }, dispatch } = useContext(gymContext);
  const user = users.find(u => u.id == params.id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState([1, 2, 3]);
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault()
    dispatch({
      type: "editUser",
      payload: {
        id: user.id,
        username: name,
        email: email,
        role: Number(role),
      }
    })
    navigate('/admin')
  }

  function decideRole(value) {
    if (value == "MemberTrainerAdmin") {
      setRole(user.role)
      console.log("if")
    } else {
      setRole(value)
      console.log("else")
    }
  }
 
  return user ? (
    <div>
      <h1>{'Edit User ' + user.username}</h1>
      <form onSubmit={submit}>
        <div className='form'>

          <label className='text-labels'>Username: </label>
          <input value={name} onChange={(n) => setName(n.target.value)}></input>

          <label className='text-labels'>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label className='text-labels'>Role:</label>
          <select id="role-select" name="role-select" onChange={(r) => setRole(r.target.value)} >
            <option value={role[0]}>Member</option>
            <option value={role[1]}>Trainer</option>
            <option value={role[2]}>Admin</option>
          </select>

          <button className='create-button'>Update</button>

        </div>
      </form>
    </div>
  ) : (<p>Loading...</p>)
}

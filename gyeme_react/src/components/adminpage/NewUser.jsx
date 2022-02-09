import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewUser.css';
import { useState } from 'react';
import gymContext from '../../gymContext';


export default function NewUser() {
    const navigate = useNavigate();
    const { dispatch } = useContext(gymContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(['Member', 'Trainer', 'Admin']);


    function submit(e) {
        e.preventDefault();
        dispatch({
            type: "addUser",
            username: name,
            password: password,
            role: role,
        });
        navigate("/admin")
    }

  return(
      <div>
          <h1>Create A New User</h1>
          <form onSubmit={submit}>
            <div className='form'>

                <label className='text-labels'>Username: </label>
                <input value={name} onChange={(n) => setName(n.target.value)}></input>

                <label className='text-labels'>Password: </label>
                <input value={password} onChange={(p) => setPassword(p.target.value)}></input>

                <label className='text-labels'>Role:</label>
                <select id="role-select" name="role-select" onChange={(r) => setRole(r.target.value)}>
                    <option value={role[0]} >Member</option>
                    <option value={role[1]} >Trainer</option>
                    <option value={role[2]} >Admin</option>
                </select>

                <button className='create-button'>Create</button>

            </div>
          </form>
      </div>
  )
}

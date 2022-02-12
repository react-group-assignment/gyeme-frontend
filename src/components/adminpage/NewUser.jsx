import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewUser.css';
import { useState } from 'react';
import gymContext from '../../gymContext';


export default function NewUser() {
    const navigate = useNavigate();
    //const params = useParams();
    const { state: { users }, dispatch } = useContext(gymContext);
    //const user = users.find(u => u.id == params.id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState([1, 2, 3]);


    async function submit(e) {
        e.preventDefault();
        const res = await fetch('https://cryptic-waters-23853.herokuapp.com/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: name, email: email, password: password, role_id: role })
        })
        const newUser = await res.json()

        dispatch({
            type: "addUser",
            user: newUser
            // username: name,
            // email: email,
            // password: password,
            // role_id: role,
        });
        navigate("/admin")
    }

  return (
      <div>
          <h1>Create A New User</h1>
          <form onSubmit={submit}>
            <div className='form'>

                <label className='text-labels'>Username: </label>
                <input value={name} onChange={(n) => setName(n.target.value)}></input>

                <label className='text-labels'>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label className='text-labels'>Password: </label>
                <input value={password} onChange={(p) => setPassword(p.target.value)}></input>

                <label className='text-labels'>Role:</label>
                <select id="role-select" name="role-select" onChange={(r) => setRole(r.target.value)}>
                    <option></option>
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

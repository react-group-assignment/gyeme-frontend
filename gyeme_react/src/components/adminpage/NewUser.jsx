import React from 'react';
import './NewUser.css';

export default function NewUser() {
  return(
      <div>
          <h1>Create A New User</h1>
          <form>
            <div className='form'>

                <label className='text-labels'>Username: </label>
                <input></input>

                <label className='text-labels'>Password: </label>
                <input></input>

                <label for="Role" className='text-labels'>Role:</label>
                <select id="role-select" name="role-select">
                    <option value="Member">Member</option>
                    <option value="Trainer">Trainer</option>
                    <option value="Admin">Admin</option>
                </select>
            
                <button>Create</button>
            </div>
          </form>
      </div>
  )
}

import React from 'react';
import './NewUser.css';

export default function NewUser() {
  return(
      <div>
          <h1>Create A New User</h1>
          <form>
            <div className='form'>
                <label>Username: </label>
                <input></input>

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
            
                <button>Create</button>
            </div>
          </form>
      </div>
  )
}

import React from 'react';

export default function Login() {
  return(
      <div>
          <h1>Login</h1>
          <form>
            <div className='form'>

                <label className='text-labels'>Username: </label>
                <input></input>

                <label className='text-labels'>Password: </label>
                <input></input>
            
                <button className='create-button'>Login</button>
            </div>
          </form>
      </div>
  )
}

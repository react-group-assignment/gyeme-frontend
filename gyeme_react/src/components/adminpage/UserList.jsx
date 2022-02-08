import React from 'react';
import User from './User';
import gymContext from '../../gymContext';
import { useContext } from 'react';

export default function UserList() {
  const { state: { users } } = useContext(gymContext);

  return(
    <div>
      { users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  )
}

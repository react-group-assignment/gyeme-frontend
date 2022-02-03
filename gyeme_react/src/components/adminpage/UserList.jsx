import React from 'react';
import User from './User';

export default function UserList({ users }) {
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

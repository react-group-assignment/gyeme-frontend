import React from 'react';
import User from './User';
import gymContext from '../../gymContext';
import { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

export default function UserList() {
  const { state: { users } } = useContext(gymContext);

  return(
    <div>
      { users.map((user) => (
        <Fragment key={user.id}>
          <User
            id={user.id}
            name={user.username}
            role_id={user.role_id}
          />
        </Fragment>
      ))}
    </div>
  )
}

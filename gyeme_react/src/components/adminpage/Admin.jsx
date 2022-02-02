import React from 'react';
import UserList from './UserList';

export default function Admin() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Nathan",
            role: "Trainer"
        },
        {
            id: 2,
            name: "Jordan",
            role: "Member"
        },
        {
            id: 3,
            name: "Ben",
            role: "Member"
        }
    ])

  return(
      <div>
          <UserList users={users}/>
      </div>
  )
}

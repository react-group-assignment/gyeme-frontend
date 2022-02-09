import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from '../../hooks/UserContext';

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0()
    const {user, setUser} = useContext(UserContext)

  return (
      <>
      <button onClick={async () => {
          const user = await loginWithRedirect();
          setUser(user)
          }}>
          LOGIN
      </button>
      </>
  );
}

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../../api";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  //Current User role ID
  const [role_id, setRole_id] = useState("")

  //Created user role ID
  const [roleId, setRoleId] = useState(1)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [locationId, setLocationId] = useState(1)

  // Checking the role_id in the db in order to give permissions
  useEffect(() => {
    async function CheckRoleId(currentUserEmail) {
        try {
            const users = await api.get('users')
            // const users = await res.json()
            users.data.forEach(element => {
                if (element.email == currentUserEmail) {
                    console.log(element.role_id)
                    setRole_id(element.role_id)
                    return element.role_id
                }
            });
        } catch (error) {
            console.log(error.message)
        }
    console.log(role_id)
    }

    if (user) CheckRoleId(user.email)
    }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: username,
      role_id: roleId,
      email: email,
      location_id: locationId,
      // image: image
    }
    console.log(newUser)
    createUser(newUser)
  }

  const createUser = async (newUser) => {
    try {
      await api.post('users', newUser)
    } catch (error) {
      console.log(error.message)
    }
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        {/* <h1>{user.role}</h1> */}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {role_id == 3 &&
          <form action="submit" onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" onChange={(e) =>setUsername(e.target.value)}></input>
            <label>email address</label>
            <input type="text" onChange={(e) =>setEmail(e.target.value)} />
            <select name="location" id="1" onChange={(e) => setLocationId(e.target.value)}>
              <option value={1}>Lifter Academy</option>
              <option value={2}>The Wide House</option>
              <option value={3}>Gains City</option>
            </select>
            <select name="role" id="2" onChange={(e) => setRoleId(e.target.value)}>
              <option value={1}>trainer</option>
              <option value={2}>member</option>
            </select>
            <button type="submit">Add this user</button>
          </form>}

      </div>
      
    )
  );
};

export default Profile;
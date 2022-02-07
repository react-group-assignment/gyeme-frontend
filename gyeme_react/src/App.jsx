import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Admin from './components/adminpage/Admin.jsx';
import NewUser from './components/adminpage/NewUser.jsx';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Login from './components/loginpage/Login';
import Notification from './components/notifications/Notification.jsx';

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nathan",
      password: 'password123',
      role: "Trainer"
    },
    {
      id: 2,
      name: "Jordan",
      password: 'password123',
      role: "Member"
    },
    {
      id: 3,
      name: "Ben",
      password: 'password123',
      role: "Member"
    }
  ])

  const addUser = (username, password, role) => {
    const newUser = {
      id: 4,
      name: username,
      password: password,
      role: role
    }
    const newUsers = [...users, newUser]
    setUsers(newUsers)
  }


  return (  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
        />
        <Route 
          path="/trainers"
        />
        <Route 
          path="/classes"
        />
        <Route 
          path="/blog"
        />
        <Route 
          path="/profile"
        />
        <Route
          path="/admin"
          element={<Admin users={users} />}
        />
        <Route
          path="/users/new"
          element={<NewUser add={addUser}/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/notification"
          element={<Notification/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

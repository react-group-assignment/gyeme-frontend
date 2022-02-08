import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { useReducer, useState } from 'react';
import Admin from './components/adminpage/Admin.jsx';
import NewUser from './components/adminpage/NewUser.jsx';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Login from './components/loginpage/Login';
import Notification from './components/notifications/Notification.jsx';
import stateReducer from './stateReducer';

const initialState = {
  users: [
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
  ]

}

function App() {

  const [state, dispatch] = useReducer(stateReducer, initialState)

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
          element={<Admin users={state.users} />}
        />
        <Route
          path="/users/new"
          element={<NewUser dispatch={dispatch} />}
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

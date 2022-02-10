import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { useEffect, useReducer, useState } from 'react';
import Admin from './components/adminpage/Admin.jsx';
import NewUser from './components/adminpage/NewUser.jsx';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Blog from './components/blog/Blog.jsx';
import AddClass from './components/classes/AddClass'
import ClassesPage from './components/classes/ClassesPage'
import Classes from './components/homepage/Classes'
import TrainersPage from './components/trainers/TrainersPage'
import Profile from './components/authentication/Profile';
import { UserContext } from './hooks/UserContext'
import Login from './components/loginpage/Login';
import Notification from './components/notifications/Notification.jsx';
import stateReducer from './stateReducer';
import EditUser from './components/adminpage/EditUser';
import User from './components/adminpage/User';
import gymContext from './gymContext';
import api from './api';


const initialState = {
  users: [],
  roles: [],
  notes: [
    {
      id: 1,
      text: 'hello there',
      date: '02/02/22'
    },
    {
      id: 2,
      text: "You have a new class with John",
      date: '03/02/22'
    },
    {
      id: 3, 
      text: "Upcoming class soon",
      date: '06/02/22'
    }
  ]
}

function App() {
  
  const [roleId, setRoleId] = useState(null)
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const { users, roles, notes } = state

  useEffect(async () => {
    const res = await fetch("http://localhost:5000/users")
    const data = await res.json()
    dispatch({
      type: 'setUsers',
      data: data
    })

    const roles_res = await fetch("http://localhost:5000/roles")
    const roles_data = await roles_res.json()
    dispatch({
      type: 'setRoles',
      data: roles_data
    })
  }, [])

  return (  
    <gymContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/trainers"
            element={<TrainersPage />}
          />
          <Route 
            path="/classes"
            element={<ClassesPage />}
          />
          <Route 
            path="/blog"
            element={<Blog></Blog>}
          />
          <Route 
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/users/new"
            element={<NewUser />}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/notification"
            element={<Notification/>}
          />
          <Route
            path="/users/edit/:id"
            element={<EditUser/>}
          />
          <Route
            path="/classes/new"
            element={<AddClass />}
          />
        </Routes>
      </BrowserRouter>
    </gymContext.Provider>
  )
}

export default App

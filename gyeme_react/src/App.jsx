import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react'
import stateReducer from './stateReducer';
import context from './context';
import './App.css'

import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Blog from './components/blog/Blog.jsx';
import AddClass from './components/classes/AddClass';
import ClassesPage from './components/classes/ClassesPage';
import TrainersPage from './components/trainers/TrainersPage';
import TrainerBlog from './components/blog/TrainerBlog';

const initialState = {
  users: [],
  classes: [],
  locations: [
    {
      id: 1,
      name: "Lifter Academy",
      address: "Level 3/116 Adelaide St, Brisbane City QLD 4000"
    },
    {
      id: 2,
      name: "The Wide House",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, United States"
    },
    {
      id: 3,
      name: "Gains City",
      address: "2 Jurong East Street 21, 03 - 14, Singapore 609601"
    }
  ],
  currentUser: null,
  posts: [],
  comments: []
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { users, classes, locations, currentUser, posts, comments } = state;

  useEffect(async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json
    dispatch({
      action: 'setUsers',
      data
    })
  }, [])

  return (
    <context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
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
            element={<Blog />}
          />
          <Route
            path="/blog/:id"
            element={<TrainerBlog />}
          />
          <Route
            path="/profile"
          />
          <Route
            path="/classes/new"
            element={<AddClass />}
          />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App

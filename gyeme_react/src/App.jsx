import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useReducer } from 'react'
import stateReducer from './stateReducer';
import appContext from './appContext';
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
  locations: [],
  currentUser: null,
  posts: [],
  comments: []
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(async () => {
    const users_res = await fetch('http://localhost:5000/users')
    const users_data = await users_res
    console.log(users_data)
    dispatch({
      type: 'setUsers',
      data: users_data
    });

    const classes_res = await fetch('http://localhost:5000/classes')
    const classes_data = await classes_res
    dispatch({
      type: 'setClasses',
      data: classes_data
    });

    const locations_res = await fetch('http://localhost:5000/locations')
    const locations_data = await locations_res
    dispatch({
      type: 'setLocations',
      data: locations_data
    });
  }, [])

  return (
    <appContext.Provider value={{ state, dispatch }}>
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
    </appContext.Provider>
  )
}

export default App

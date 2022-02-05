import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import AddClass from './components/classes/AddClass'
import ClassesPage from './components/classes/ClassesPage'
import Classes from './components/homepage/Classes'
import TrainersPage from './components/trainers/TrainersPage'

function App() {
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
          element={<TrainersPage />}
        />
        <Route 
          path="/classes"
          element={<ClassesPage />}
        />
        <Route 
          path="/blog"
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

  )
}

export default App

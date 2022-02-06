import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Blog from './components/blog/Blog.jsx';

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
        />
        <Route 
          path="/classes"
        />
        <Route 
          path="/blog"
          element={<Blog/>}
        />
        <Route 
          path="/profile"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

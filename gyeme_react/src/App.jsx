import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css'

import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';
import Blog from './components/blog/Blog.jsx';
import AddClass from './components/classes/AddClass';
import ClassesPage from './components/classes/ClassesPage';
import TrainersPage from './components/trainers/TrainersPage';

function App() {
  return (
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar.jsx';

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
        />
        <Route 
          path="/profile"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

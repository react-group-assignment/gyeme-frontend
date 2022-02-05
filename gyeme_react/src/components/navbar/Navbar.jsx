import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  return(
    <nav className='nav'>
      <Link to='/' className='link'>Home</Link>
      <Link to='/trainers' className='link'>Trainers</Link>
      <Link to='/classes' className='link'>Classes</Link>
      <Link to='/blog' className='link'>Blog</Link>
      <Link to='/profile' className='link'>My Profile</Link>
    </nav>
  )
}

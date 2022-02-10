import React from 'react';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='page-head'>
                <h3>Blog Page</h3>
                <p>What's happening at Gyeme?</p>
            </div>
            <div className='images'>
                <img className='image' src="/src/Images/blog_1.jpg" alt="A happy trainer" />
                <img className='image' src="/src/Images/blog_2.jpg" alt="A happy trainer training a happy member" />
                <img className='image' src="/src/Images/blog_3.jpg" alt="Another happy trainer training another happy member" />
            </div>
        </div>
    )
}
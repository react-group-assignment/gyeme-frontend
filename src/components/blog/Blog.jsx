import React from 'react';
import Sidebar from './Sidebar.jsx';
import Articles from './Articles.jsx';
import './Blog.css';

export default function Blog() {
    return (
        <div className='blog-container'>
            <div className='blog-components'>
                <Sidebar className='sidebar' />
                <Articles className='articles' />
            </div>
        </div>
    )
}
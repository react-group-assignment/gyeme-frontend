import React from 'react';
import TrainerSidebar from './TrainerSidebar.jsx';
import TrainerArticles from './TrainerArticles.jsx';
import './Blog.css';

export default function TrainerBlog() {
    return (
        <div className='blog-container'>
            <div className='blog-components'>
                <TrainerSidebar className='sidebar' />
                <TrainerArticles className='articles' />
            </div>
        </div>
    )
}
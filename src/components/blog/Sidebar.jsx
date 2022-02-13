import React from 'react';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='page-head'>
                <h3>Blog Page</h3>
                <p>What's happening at Gyeme?</p>
            </div>
            <div className='blog-images'>
                <img className='blog-image' src="/src/Images/blog_1.jpg" alt="A happy trainer" />
                <img className='blog-image' src="/src/Images/blog_2.jpg" alt="A happy trainer training a happy member" />
                <img className='blog-image' src="/src/Images/blog_3.jpg" alt="Another happy trainer training another happy member" />
            </div>
            {/* <div className='create-post-form'>
                <form className='form-items' action="submit">
                    <div>
                        <label htmlFor="">Post Title</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Post Body</label>
                        <textarea></textarea>
                    </div>
                    <input className='submit' type="button" value="Create Post" />
                </form>
            </div> */}
        </div>
    )
}
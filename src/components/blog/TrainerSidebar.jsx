import React from 'react';
import './Sidebar.css'

export default function TrainerSidebar() {
    return (
        <div className='sidebar-container'>
            <div className='trainer-page-head'>
                <img className='trainer-avatar' src="src/Images/avatar.jpg" alt="avatar" />
                <h3>{trainer.username}</h3>
                <p>{trainer.location}</p>
            </div>
            <div className='create-post-form'>
                <form className='form-items' action="submit">
                    <div>
                        <label htmlFor="">Post Title</label>
                        <input type="text" />
                    </div>
                    <input type="button" value="upload an image" />
                    <div >
                        <label htmlFor="">Post Body</label>
                        <textarea></textarea>
                    </div>
                    <input className='submit' type="button" value="Create Post" />
                </form>
            </div>
            <div className='member-view'>

            </div>
        </div>
    )
}
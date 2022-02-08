import { React, useEffect, useState } from 'react';
import './Articles.css'

export default function Articles() {
    const { state: { posts, comments } } = useContext(context)

    return (
        <div className='articles-container'>
            {posts.map((post) => (
                <div className='post'>
                    <div className='article'>
                        <span className='article-header'>
                            <img className='article-avatar' src="src/Images/avatar.jpg" alt="avatar" />
                            <h4 className='article-author'>{post.user.username}</h4>
                            <p className='article-datetime'>{post.datetime}</p>
                        </span>
                            <h4 className='article-title'>{post.title}</h4>
                        <span className='article-content'>
                            <img className='article-image' src="src/Images/article.jpg" alt="article-image" />
                            <p className='article-body'>{post.body}</p>
                        </span>
                    </div>
                    <div className='comments'>
                        {comments.map((comment) => (
                            <div className='comment'>
                                <span className='comment-header'>
                                    <img className='article-avatar-small' src="src/Images/avatar.jpg" alt="avatar" />
                                    <h4 className='article-author-small'>{comment.user.username}</h4>
                                    <p className='article-datetime-small'>{comment.datetime}</p>
                                </span>
                                <p className='comment-body'>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
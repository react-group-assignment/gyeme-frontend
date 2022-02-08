import React from 'react';
import './Articles.css'

export default function TrainerArticles() {
    return (
        <div className='articles-container'>
            {posts
            .filter((post) => post.user.id == trainer)
            .map((post) => (
                <div className='post'>
                    <div className='article'>
                        <span className='article-header'>
                            <img className='article-avatar' src="src/Images/avatar.jpg" alt="avatar" />
                            <h4 className='article-author'>{post.author}</h4>
                            <p className='article-datetime'>{post.datetime}</p>
                        </span>
                            <h4 className='article-title'>{post.title}</h4>
                        <span className='article-content'>
                            <img className='article-image' src="src/Images/article.jpg" alt="article-image" />
                            <p className='article-body'>{post.body}</p>
                        </span>
                    </div>
                    <div className='comments'>
                        {post.comments.map((comment) => (
                            <div className='comment'>
                                <span className='comment-header'>
                                    <img className='article-avatar-small' src="src/Images/avatar.jpg" alt="avatar" />
                                    <h4 className='article-author-small'>{comment.author}</h4>
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
import React from 'react';
import { useEffect, useState } from 'react';
import './Articles.css'

export default function Articles() {
    const [posts, setPosts] = useState("")
    const [comments, setComments] = useState("")

    const getPosts = async () => {
        try {
            const posts_response = await fetch("https://cryptic-waters-23853.herokuapp.com/posts")
            const posts_jsonData = await posts_response.json()
            setPosts(posts_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getComments = async () => {
        try {
            const comments_response = await fetch("https://cryptic-waters-23853.herokuapp.com/comments")
            const comments_jsonData = await comments_response.json()
            setComments(comments_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getPosts()
        getComments()
    }, [])

    return (
        <div className='articles-container'>
            {posts == [] ? <h1>Loading ...</h1> : <>
                {posts.map((post) => (
                    <div className='post'>
                        <div className='article'>
                            <span className='article-header'>
                                <img className='article-avatar' src="src/Images/avatar.jpg" alt="avatar" />
                                <h4 className='article-author'>{post.author}</h4>
                                <h5 className='article-title'>{post.title}</h5>
                            </span>
                            <span className='article-content'>
                                <img className='article-image' src="src/Images/article.jpg" alt="article-image" />
                                <p className='article-body'>{post.body}</p>
                            </span>
                        </div>
                        <div className='comments'>
                            {comments == [] ? <h1>Loading ...</h1> : <>
                                {comments.map((comment) => (
                                    <div className='comment'>
                                        <span className='comment-header'>
                                            <img className='article-avatar-small' src="src/Images/avatar.jpg" alt="avatar" />
                                            <h4 className='article-author-small'>{comment.author}</h4>
                                        </span>
                                        <p className='comment-body'>{comment.body}</p>
                                    </div>
                                ))}
                            </>}
                        </div>
                    </div>
                ))}
            </>}
        </div>
    )
}
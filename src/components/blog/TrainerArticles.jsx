import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Articles.css'

export default function Articles() {
    const [posts, setPosts] = useState("")
    const [comments, setComments] = useState("")
    const [author, setAuthor] = useState("")

    const getUsers = async () => {
        try {
            const users_response = await fetch("http://localhost:5000/users")
            const users_jsonData = await users_response.json()
            setUsers(users_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getPosts = async () => {
        try {
            const posts_response = await fetch("http://localhost:5000/posts")
            const posts_jsonData = await posts_response.json()
            setPosts(posts_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getComments = async () => {
        try {
            const comments_response = await fetch("http://localhost:5000/comments")
            const comments_jsonData = await comments_response.json()
            setComments(comments_jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getUsers()
        getPosts()
        getComments()
        setAuthor
    }, [])


    function findAuthor(user_id) {
        const author = fetch(`https://cryptic-waters-23853.herokuapp.com/users/${parseInt(user_id)}`)
        return author
    }

    return (
        <div className='articles-container'>
            {posts == [] ? <h1>Loading ...</h1> : <>
                {posts
                .filter((post) => post.user_id == useParams(id))
                .map((post) => (
                    <div className='post'>
                        <div className='article'>
                            <span className='article-header'>
                                <img className='article-avatar' src="src/Images/avatar.jpg" alt="avatar" />
                                <h4 className='article-author'>{findAuthor(post.user_id)}</h4>
                                <p className='article-datetime'>{post.datetime}</p>
                            </span>
                            <h4 className='article-title'>{post.title}</h4>
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
                                            <h4 className='article-author-small'>{findAuthor(comment.user_id)}</h4>
                                            <p className='article-datetime-small'>{comment.datetime}</p>
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
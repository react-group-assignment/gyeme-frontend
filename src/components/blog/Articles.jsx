import React from 'react';
import { useEffect, useState } from 'react';
import './Articles.css'

export default function Articles() {
    const [users, setUsers] = useState("")
    const [posts, setPosts] = useState("")
    const [comments, setComments] = useState("")

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
        getUsers()
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
                                {users == [] ? <h4>Loading Author...</h4> : <>
                                <img className='article-avatar' src={user.image || "../../src/Images/avatar.jpg"} alt="avatar" />
                                    {users
                                        .filter((user) => user.id == post.user_id)
                                        .map((user) => (
                                            <h4 className='article-author'>{user.username}</h4>
                                        ))
                                    }
                                </>}
                                <h5 className='article-title'>{post.title}</h5>
                            </span>
                            <span className='article-content'>
                                <img className='article-image' src="src/Images/article.jpg" alt="article-image" />
                                <p className='article-body'>{post.body}</p>
                            </span>
                        </div>
                        <div className='comments'>
                            {comments == [] ? <h1>Loading ...</h1> : <>
                                {comments
                                    .filter((comment => comment.post_id == post.id))
                                    .map((comment) => (
                                        <div className='comment'>
                                            <span className='comment-header'>
                                                {users == [] ? <h4>Loading Author...</h4> : <>
                                                <img className='article-avatar-small' src={user.image || "../../src/Images/avatar.jpg"} alt="avatar" />
                                                    {users
                                                        .filter((user) => user.id == comment.user_id)
                                                        .map((user) => (
                                                            <h4 className='comment-author'>{user.username}</h4>
                                                        ))
                                                    }
                                                </>}
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
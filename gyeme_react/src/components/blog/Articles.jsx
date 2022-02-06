import React from 'react';
import './Articles.css'

export default function Articles() {
    const posts = [
        {
            id: 1,
            author: "Big Chungus",
            datetime: "04/02/2022 12:46pm",
            title: "Test Post",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            comments: [
                {
                    id: 1,
                    author: "Jane Dough",
                    datetime: "04/02/2022 2:41pm",
                    body: "This is amazing!"
                },
                {
                    id: 2,
                    author: "Shadey Slim",
                    datetime: "04/02/2022 2:41pm",
                    body: "Love it"
                }
            ]
        },
        {
            id: 2,
            author: "David Wideman",
            datetime: "04/02/2022 12:46pm",
            title: "Test Post",
            body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            comments: [
                {
                    id: 3,
                    author: "Some Dude",
                    datetime: "04/02/2022 2:41pm",
                    body: "Truely inspiring stuff!"
                },
                {
                    id: 4,
                    author: "Jane Dough",
                    datetime: "04/02/2022 2:41pm",
                    body: "Can't wait to try this."
                },
                {
                    id: 5,
                    author: "Shadey Slim",
                    datetime: "04/02/2022 2:41pm",
                    body: "Challenge accepted!"
                }
            ]
        },
        {
            id: 3,
            author: "Donald Pump",
            datetime: "04/02/2022 12:46pm",
            title: "Test Post",
            body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            comments: [
                {
                    id: 6,
                    author: "Big Boy",
                    datetime: "04/02/2022 2:41pm",
                    body: "Couldn't agree more."
                },
                {
                    id: 7,
                    author: "Some Dude",
                    datetime: "04/02/2022 2:41pm",
                    body: "Nice post my man!"
                },
                {
                    id: 8,
                    author: "Jane Dough",
                    datetime: "04/02/2022 2:41pm",
                    body: "OMG..."
                },
                {
                    id: 9,
                    author: "Shadey Slim",
                    datetime: "04/02/2022 2:41pm",
                    body: "Wow"
                },
                {
                    id: 6,
                    author: "Big Boy",
                    datetime: "04/02/2022 2:41pm",
                    body: "Couldn't agree more."
                },
                {
                    id: 7,
                    author: "Some Dude",
                    datetime: "04/02/2022 2:41pm",
                    body: "Nice post my man!"
                },
                {
                    id: 8,
                    author: "Jane Dough",
                    datetime: "04/02/2022 2:41pm",
                    body: "OMG..."
                },
                {
                    id: 9,
                    author: "Shadey Slim",
                    datetime: "04/02/2022 2:41pm",
                    body: "Wow"
                },
                {
                    id: 6,
                    author: "Big Boy",
                    datetime: "04/02/2022 2:41pm",
                    body: "Couldn't agree more."
                },
                {
                    id: 7,
                    author: "Some Dude",
                    datetime: "04/02/2022 2:41pm",
                    body: "Nice post my man!"
                },
                {
                    id: 8,
                    author: "Jane Dough",
                    datetime: "04/02/2022 2:41pm",
                    body: "OMG..."
                },
                {
                    id: 9,
                    author: "Shadey Slim",
                    datetime: "04/02/2022 2:41pm",
                    body: "Wow"
                }
            ]
        }
    ]

    return (
        <div className='articles-container'>
            {posts.map((post) => (
                <div className='post'>
                    <div className='article'>
                        <span className='article-header'>
                            <img className='avatar' src="src/Images/avatar.jpg" alt="avatar" />
                            <h4 className='author'>{post.author}</h4>
                            <p className='datetime'>{post.datetime}</p>
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
                                    <img className='avatar-small' src="src/Images/avatar.jpg" alt="avatar" />
                                    <h4 className='author-small'>{comment.author}</h4>
                                    <p className='datetime-small'>{comment.datetime}</p>
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
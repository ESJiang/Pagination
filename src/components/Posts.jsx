import React from "react";

const Posts = ({ posts }) => (
    <ul className='list-group'>
        {posts.length &&
            posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
    </ul>
);

export default Posts;

import React from 'react';
import "../../css/Post.css";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
const Post = () => {
    return (
        <div className="post">
            <PostHeader />
            <div className="post-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRul8ITPJ72owUhxzQmez7jtKhl9LhUYsoA&usqp=CAU" alt="post"/>
            </div>
            <PostFooter />
        </div>
    );
}

export default Post;
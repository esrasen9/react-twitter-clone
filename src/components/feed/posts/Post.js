import React,{forwardRef} from 'react';
import "../../css/Post.css";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
const Post = forwardRef(({post},ref) => {
    return (
        <div className="post" ref={ref}>
            <PostHeader post={post} />
            <div className="post-body">
                <img src={post.post.imageUrl} alt="post"/>
            </div>
            <PostFooter/>
        </div>
    );}
);

export default Post;
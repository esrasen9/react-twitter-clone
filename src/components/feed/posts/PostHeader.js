import React from 'react';
import {Avatar} from "@mui/material";
import PostHeaderDetails from "./PostHeaderDetails";

const PostHeader = ({post}) => {
    const {avatarImageUrl,displayName,username,postText} = post.post;
    return (
        <div className="post-header">
            <div>
                <Avatar
                    src={avatarImageUrl}
                    className="post-avatar"/>
            </div>
            <PostHeaderDetails displayName={displayName}
                               username={username}
                               postText={postText} />
        </div>
    );
}

export default PostHeader;
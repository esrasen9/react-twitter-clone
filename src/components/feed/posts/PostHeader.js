import React from 'react';
import {Avatar} from "@mui/material";
import PostHeaderDetails from "./PostHeaderDetails";

const PostHeader = () => {
    return (
        <div className="post-header">
            <div>
                <Avatar className="post-avatar"/>
            </div>
            <PostHeaderDetails />
        </div>
    );
}

export default PostHeader;
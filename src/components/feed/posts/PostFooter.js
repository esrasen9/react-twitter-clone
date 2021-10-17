import React from 'react';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const PostFooter = () => {
    return (
        <div className="post-footer">
            <ChatBubbleOutlineIcon className="post-footer-icon chat-icon" fontSize="small"/>
            <RepeatIcon className="post-footer-icon retweet-icon" fontSize="small"/>
            <FavoriteBorderIcon className="post-footer-icon like-icon" fontSize="small"/>
            <PublishIcon className="post-footer-icon share-icon" fontSize="small"/>
        </div>
    );
}

export default PostFooter;
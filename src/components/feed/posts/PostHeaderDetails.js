import React from 'react';
import VerifiedIcon from "@mui/icons-material/Verified";

const PostHeaderDetails = ({displayName,username,postText}) => {
    return (
        <div className="post-header-details">
            <div>
                <h3>
                    {displayName} {" "}
                    <VerifiedIcon className="post-badge"/>
                    <span className="post-username">
                                {username}</span>
                </h3>
            </div>
            <div className="post-caption">
                <p>{postText}</p>
            </div>
        </div>
    );
}

export default PostHeaderDetails;
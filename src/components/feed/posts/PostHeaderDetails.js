import React from 'react';
import VerifiedIcon from "@mui/icons-material/Verified";

const PostHeaderDetails = () => {
    return (
        <div className="post-header-details">
            <div>
                <h3>
                    Esra Şen {" "}
                    <VerifiedIcon className="post-badge"/>
                    <span className="post-username">
                                @esrasen.9</span>
                </h3>
            </div>
            <div className="post-caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit.</p>
            </div>
        </div>
    );
}

export default PostHeaderDetails;
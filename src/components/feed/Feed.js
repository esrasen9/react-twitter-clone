import React from 'react';
import "../css/Feed.css"
import TweetBox from "./TweetBox";
import Posts from "./posts/Posts";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-title">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Posts />
        </div>
    );
}

export default Feed;
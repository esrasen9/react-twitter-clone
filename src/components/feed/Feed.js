import React from 'react';
import "../css/Feed.css"
import TweetBox from "./TweetBox";
import Post from "./posts/Post";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-title">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post/>
            <Post/>
            <Post/>

            {/*
                tweet input
                avatar input icons tweet
            */}

        </div>
    );
}

export default Feed;
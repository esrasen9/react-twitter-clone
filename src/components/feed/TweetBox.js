import React from 'react';
import {Avatar,Button} from "@mui/material";
import "../css/TweetBox.css";
const TweetBox = () => {
    return (
        <div className="feed-tweet-box">
            <form className="tweet-form">
                <div className="tweet-container">
                    <Avatar className="tweet-avatar" src="https://pbs.twimg.com/media/FB1GUoIWQAgAQTK?format=jpg&name=small"/>
                    <input className="tweet-input" type="text" placeholder="What's happening?"/>
                </div>
                {/*<input className="tweet-box-image-input" placeholder="Enter img URL" type="text"/>*/}
                <Button className="tweet-box-button">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
import React from 'react';
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const WidgetPosts = () => {
    return (
        <div className="widget-posts">
            <h2>What's happening?</h2>
            <TwitterTweetEmbed tweetId="1449829864878526464"/>
            <TwitterTweetEmbed tweetId="1449827532124135429" />
            <TwitterTweetEmbed tweetId="1449811329942949891" />
            <TwitterTweetEmbed tweetId="1299426521397039108" />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="CodeNewbies"
                options={{height: 400}}/>
            <TwitterShareButton
                url="https://github.com/esrasen9"
                options={
                    {
                        text:"ReactJS is awesome 🚀.Click here to browse my projects!",
                        via:"CodeNewbies"}}/>
        </div>
    );
}

export default WidgetPosts;
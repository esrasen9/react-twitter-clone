import React, {useState} from 'react';
import {Avatar,Button} from "@mui/material";
import "../css/TweetBox.css";
import {db, storage} from "../../firebase/firebase";
import firebase from "firebase";
const TweetBox = () => {
    const [postText,setPostText] = useState("");
    const [image,setImage] = useState(null);

    const handleUpload = () => {
        if(image){
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) =>{console.log(snapshot)},
                (error) => {
                    console.error(error);
                    alert(error.message);},
                () => {
                    storage.ref('images')
                        .child(image.name)
                        .getDownloadURL().then(url =>{
                        db.collection("posts").add({
                            avatarImageUrl: "https://pbs.twimg.com/profile_images/1325895999601192962/dQOoyZWC_400x400.jpg",
                            isVerified: false,
                            postText,
                            imageUrl: url,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            username: "@esrasen9",
                            displayName: "Esra Şen"
                        })
                    })
                })
        }
        else {
            db.collection("posts").add({
                avatarImageUrl: "https://pbs.twimg.com/profile_images/1325895999601192962/dQOoyZWC_400x400.jpg",
                isVerified: false,
                postText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: "@esrasen9",
                displayName: "Esra Şen"
            })
        }

    }
    const handleFileChange = (e)=> {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    return (
        <div className="feed-tweet-box">
            <form className="tweet-form">
                <div className="tweet-container">
                    <Avatar className="tweet-avatar"/>
                    <input
                        value={postText}
                        onChange={(e) => setPostText(e.target.value) }
                        className="tweet-input"
                        type="text"
                        placeholder="What's happening?"/>
                </div>
                <input
                    onChange={handleFileChange}
                    className="tweet-box-image-input"
                    placeholder="Enter Img"
                    type="file"/>
                <Button
                    onClick={handleUpload}
                    className="tweet-box-button">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
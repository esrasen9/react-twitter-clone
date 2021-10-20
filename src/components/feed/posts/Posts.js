import React, {useEffect,useContext} from 'react';
import {db} from "../../../firebase/firebase.js";
import Post from "./Post";
import {Context} from "../../../context/Context";
import FlipMove from "react-flip-move";
const Posts = () => {
    const {postState} = useContext(Context);
    const {posts,setPosts} = postState;

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        post: doc.data()
                    })))
            })
    }, []);

    return (
        <FlipMove>
            {
                posts && posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))
            }
        </FlipMove>
    )
}
export default Posts;

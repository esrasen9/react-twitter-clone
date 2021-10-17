import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBp2LcDDD2q-Q60NYEeDxKu_0v1u8Mdj8",
    authDomain: "twitter-clone-e2eb0.firebaseapp.com",
    projectId: "twitter-clone-e2eb0",
    storageBucket: "twitter-clone-e2eb0.appspot.com",
    messagingSenderId: "601097678761",
    appId: "1:601097678761:web:719ce2d867dbf876bb1eb8"
}

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage}
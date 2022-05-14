import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
      apiKey: "AIzaSyBG0PIDQItWlXjYNXo63leTdLFEW7JJvyw",
      authDomain: "twitter-7f721.firebaseapp.com",
      projectId: "twitter-7f721",
      storageBucket: "twitter-7f721.appspot.com",
      messagingSenderId: "416538435355",
      appId: "1:416538435355:web:30b6b691872be80b053dbe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export const firestore = firebase.firestore();

    export default firebase;
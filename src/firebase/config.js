import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIKWVi6sALXyzbeYy5dx4VJ4revEDBz4M",
    authDomain: "womazing-web.firebaseapp.com",
    projectId: "womazing-web",
    storageBucket: "womazing-web.appspot.com",
    messagingSenderId: "806197307167",
    appId: "1:806197307167:web:a980dd60e52e2e199c322a",
    measurementId: "G-39CK8CQGWX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

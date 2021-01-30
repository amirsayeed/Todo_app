// For Firebase JS SDK v7.20.0 and later, measurementId is optional



import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYVo7GQbjZuQS9QgjxFN2qCZFNjJgMOHY",
  authDomain: "todo-app-222b1.firebaseapp.com",
  projectId: "todo-app-222b1",
  storageBucket: "todo-app-222b1.appspot.com",
  messagingSenderId: "107178331168",
  appId: "1:107178331168:web:151b3c0edd36ca135c0045",
  measurementId: "G-YDWWHG5EWC"
});

const db = firebaseApp.firestore();
export default db;
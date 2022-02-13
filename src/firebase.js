import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
       apiKey: "AIzaSyCIldnRyPXDaDNi5wjXyxNmJh1XPuxoic8",
  	authDomain: "facebook-mobile-clone.firebaseapp.com",
  	projectId: "facebook-mobile-clone",
  	storageBucket: "facebook-mobile-clone.appspot.com",
  	messagingSenderId: "809936442830",
  	appId: "1:809936442830:web:900489b2dc712d1770c79f",
  	measurementId: "G-7DP4P02GCP"

})

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};
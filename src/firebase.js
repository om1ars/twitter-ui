import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyABQnaEGd8afb-6E91p5812YAx8a3YQGEM",
  authDomain: "netflixclone-2a1fc.firebaseapp.com",
  projectId: "netflixclone-2a1fc",
  storageBucket: "netflixclone-2a1fc.appspot.com",
  messagingSenderId: "441513167660",
  appId: "1:441513167660:web:386affd70fbb6aadd8fa89"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

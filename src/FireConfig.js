import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAyY619S6zKuMvMwkIYntfOKs96rioVlTI",
  authDomain: "messenger-36c0b.firebaseapp.com",
  databaseURL: "https://messenger-36c0b.firebaseio.com",
  projectId: "messenger-36c0b",
  storageBucket: "messenger-36c0b.appspot.com",
  messagingSenderId: "320423851753",
  appId: "1:320423851753:web:1adaa4e3a4dc27c2306278",
  measurementId: "G-YTRXCDZXQK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

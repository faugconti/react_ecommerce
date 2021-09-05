// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAop79FgFxdQ8hXfK5q8DySXzTCWdBcOgI",
  authDomain: "ecommercereact-bdd0d.firebaseapp.com",
  projectId: "ecommercereact-bdd0d",
  storageBucket: "ecommercereact-bdd0d.appspot.com",
  messagingSenderId: "650915372331",
  appId: "1:650915372331:web:adb1d4f0e435a3fc04396e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

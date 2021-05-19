import firebase from 'firebase';
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

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQoeRQfkFrTLkc2qodHDJ_O0CUn-IQ-68",
  authDomain: "mangoorached.firebaseapp.com",
  databaseURL:
    "https://mangoorached-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mangoorached",
  storageBucket: "mangoorached.appspot.com",
  messagingSenderId: "300591497162",
  appId: "1:300591497162:web:66de6ab5e2c01d7be0d933",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db, firebase, firebaseConfig };

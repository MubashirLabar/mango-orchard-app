import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
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

var app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

const db = getDatabase(app);
const auth = firebase.auth();
export { db, auth, firebase, firebaseConfig };

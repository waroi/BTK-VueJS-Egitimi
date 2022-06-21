import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEMMHapTxouV87di1nYagTRBEwFsQEKUQ",
  authDomain: "playlist-vue-9482a.firebaseapp.com",
  projectId: "playlist-vue-9482a",
  storageBucket: "playlist-vue-9482a.appspot.com",
  messagingSenderId: "176878282816",
  appId: "1:176878282816:web:7da6c4588bbed534dc17a5",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

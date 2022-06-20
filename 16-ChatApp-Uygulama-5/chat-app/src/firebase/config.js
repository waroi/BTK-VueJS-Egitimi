import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXmd4nqQ5viGD0U3-qL8DXVv_pnN_rIWo",
  authDomain: "blog-vue3-764e3.firebaseapp.com",
  projectId: "blog-vue3-764e3",
  storageBucket: "blog-vue3-764e3.appspot.com",
  messagingSenderId: "899353647716",
  appId: "1:899353647716:web:a7f0ebb5fa86804b77dd71",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };

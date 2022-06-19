import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXmd4nqQ5viGD0U3-qL8DXVv_pnN_rIWo",
  authDomain: "blog-vue3-764e3.firebaseapp.com",
  projectId: "blog-vue3-764e3",
  storageBucket: "blog-vue3-764e3.appspot.com",
  messagingSenderId: "899353647716",
  appId: "1:899353647716:web:855eea159f0990b977dd71",
};

const fb = initializeApp(firebaseConfig);

export { fb };

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCF6oGOYlfht_fhaaQbwjtHNm5yqFiLwxc",
  authDomain: "vue3-8ecd0.firebaseapp.com",
  projectId: "vue3-8ecd0",
  storageBucket: "vue3-8ecd0.appspot.com",
  messagingSenderId: "588853687474",
  appId: "1:588853687474:web:2ae353c3a191c8c42f05ab",
};

const fb = initializeApp(firebaseConfig);

export { fb };

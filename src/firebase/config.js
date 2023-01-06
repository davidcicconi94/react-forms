import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHht3Z8uQk1UFEvuTHBPTIqhj_yXCin0Y",

  authDomain: "react-form-62625.firebaseapp.com",

  projectId: "react-form-62625",

  storageBucket: "react-form-62625.appspot.com",

  messagingSenderId: "590575848784",

  appId: "1:590575848784:web:cb75487fc93744f68ab055",
};

initializeApp(firebaseConfig);

export const firestore = getFirestore();

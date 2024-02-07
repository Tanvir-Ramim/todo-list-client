// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS60v0-lM6x7vNn8DWIl1k3FMdYRv0LTg",
  authDomain: "todo-list-b8090.firebaseapp.com",
  projectId: "todo-list-b8090",
  storageBucket: "todo-list-b8090.appspot.com",
  messagingSenderId: "595282249618",
  appId: "1:595282249618:web:18859a656424885b25234b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
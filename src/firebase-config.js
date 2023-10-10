//This code is used to access firebase services in our react app

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {//This is an object that contains the configuration settings for your Firebase project.
  apiKey: "AIzaSyCbxHblg42tz_Z0un6LHAm1yE3OLtUaLHQ",
  authDomain: "chat-app-copy-e1892.firebaseapp.com",
  projectId: "chat-app-copy-e1892",
  storageBucket: "chat-app-copy-e1892.appspot.com",
  messagingSenderId: "588543669527",
  appId: "1:588543669527:web:2cf8ca3793e6d937d17352",
  measurementId: "G-8STLBELKS4"
};

const app = initializeApp(firebaseConfig);  //It takes the firebaseConfig object as an argument and initializes a Firebase app instance with the provided configuration.//app constant is used to store the reference to the Firebase app instance
export const auth=getAuth(app); //auth is a specific Firebase Authentication instance that allows you to interact with Firebase Authentication features like user sign-in, sign-out, and account management.
export const provider=new GoogleAuthProvider();//provider will tell firebase that we want to handle authentication using google account of user
export const db=getFirestore(app);  //db that holds a reference to the Firestore database. This variable allows you to interact with the Firestore database and perform operations like reading, writing, and querying data.

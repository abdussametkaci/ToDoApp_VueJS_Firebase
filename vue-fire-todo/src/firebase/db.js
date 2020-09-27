import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjXquYPxTxiI3wNajNYbRjcDr3JtWsTz8",
    authDomain: "vue-fire-todo-c0865.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-c0865.firebaseio.com",
    projectId: "vue-fire-todo-c0865",
    storageBucket: "vue-fire-todo-c0865.appspot.com",
    messagingSenderId: "639459993410",
    appId: "1:639459993410:web:d73fdd2dcf669261ae8adb"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
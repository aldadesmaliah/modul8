import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBUmk6MFCCyV244uM3dh-vSgHOBXGyU9bg",
  authDomain: "modul9-noteapp.firebaseapp.com",
  databaseURL: "Bhttps://modul9-noteapp-default-rtdb.firebaseio.com",
  projectId: "modul9-noteapp",
  storageBucket: "modul9-noteapp.appspot.com",
  messagingSenderId: "1001396873386",
  appId: "1:1001396873386:web:b6e14627264f8bb8b108d3",
}); 

const FIREBASE = firebase;

export default FIREBASE;
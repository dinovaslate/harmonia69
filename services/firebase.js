// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLoIryxfgKQ3WTxurg9lH1OiJY4rQi7E",
  authDomain: "harmonia-4e63b.firebaseapp.com",
  databaseURL: "https://harmonia-4e63b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "harmonia-4e63b",
  storageBucket: "harmonia-4e63b.appspot.com",
  messagingSenderId: "1041817986278",
  appId: "1:1041817986278:web:5da0b229cc888de3c58727",
  measurementId: "G-K3D54PW286"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export default firebaseApp;
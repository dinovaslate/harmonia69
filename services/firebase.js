// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8WaA8gy8KIF2GHMwC-J-6l6KI9MhTnoE',
  authDomain: 'harmonia-51069.firebaseapp.com',
  projectId: 'harmonia-51069',
  storageBucket: 'harmonia-51069.appspot.com',
  messagingSenderId: '174922142016',
  appId: '1:174922142016:web:2f4fafb3c32de55689eaa5',
  measurementId: 'G-QS8EFGW18X',
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export default firebaseApp;
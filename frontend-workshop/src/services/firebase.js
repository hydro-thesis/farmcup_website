// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvOLkGhIOLp8TZrXEKfhKre8NQRMU8MRw',
  authDomain: 'hydro-1234.firebaseapp.com',
  databaseURL: 'https://hydro-1234-default-rtdb.firebaseio.com',
  projectId: 'hydro-1234',
  storageBucket: 'hydro-1234.appspot.com',
  messagingSenderId: '1084876235206',
  appId: '1:1084876235206:web:c369a8b72befa8d3b792c7',
  measurementId: 'G-QQXMPC599G'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export const db = getFirestore();
const storage = getStorage();
const functions = getFunctions(app);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectStorageEmulator(storage, '127.0.0.1', 9199);
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
}
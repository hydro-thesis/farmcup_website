import React from "react";
import PropTypes from "prop-types";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  doc,
  Timestamp,
  onSnapshot,
  getFirestore,
  getDocs,
  collection,
  documentId,
  query,
  where,
  orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvOLkGhIOLp8TZrXEKfhKre8NQRMU8MRw",
  authDomain: "hydro-1234.firebaseapp.com",
  databaseURL: "https://hydro-1234-default-rtdb.firebaseio.com",
  projectId: "hydro-1234",
  storageBucket: "hydro-1234.appspot.com",
  messagingSenderId: "1084876235206",
  appId: "1:1084876235206:web:c369a8b72befa8d3b792c7",
  measurementId: "G-QQXMPC599G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

const pHValues = collection(db, "parameters");

const q = query(pHValues, orderBy("timeStamp"));

onSnapshot(q, (snapshot) => {
  let parameters = [];
  snapshot.docs.forEach((doc) => {
    parameters.push({ ...doc.data(), id: doc.id });
  });
  console.log(parameters);
});

const docRef = doc(db, "parameters/pH");

onSnapshot(docRef, (doc) => {
  console.log(doc.data());
});

const Connection = (data) => {
  return <div></div>;
};

Connection.propTypes = {};

export default Connection;

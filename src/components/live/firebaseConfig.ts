var firebase = require("firebase/app");
// var firebasedb = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyDhaKh0v1SY2zMr-jfT-TRkjsyQb0I5-ws",
  authDomain: "live-result-235df.firebaseapp.com",
  databaseURL: "https://live-result-235df-default-rtdb.firebaseio.com",
  projectId: "live-result-235df",
  storageBucket: "live-result-235df.appspot.com",
  messagingSenderId: "265886718567",
  appId: "1:265886718567:web:b54125e6b172104ce112c2",
  measurementId: "G-E19GCCCFYE",
}; //by adding your credentials, you get authorized to read and write from the database

export const app = firebase.initializeApp(firebaseConfig);
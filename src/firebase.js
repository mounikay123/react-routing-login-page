import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADnCjoX0f6A58ilFolXt7i81XgNVuxNtY",
    authDomain: "fir-a6903.firebaseapp.com",
    databaseURL: "https://fir-a6903.firebaseio.com",
    projectId: "fir-a6903",
    storageBucket: "",
    messagingSenderId: "596557930787"
  };
  firebase.initializeApp(config);
  export default firebase;
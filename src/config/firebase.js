// Firebase  deps

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Incializar firebase
 const firebaseConfig = {
    apiKey: "AIzaSyCgIZAVeidbxK8X5s2mG1PbGLw1aR4r5DU",
    authDomain: "firechat-test-8569e.firebaseapp.com",
    projectId: "firechat-test-8569e",
    storageBucket: "firechat-test-8569e.appspot.com",
    messagingSenderId: "799160253159",
    appId: "1:799160253159:web:2ebb480a112562fcfac042",
    measurementId: "G-WKSGNFJB08"
  };

  firebase.initializeApp(firebaseconfig);

  // Tomo los elementos basicos para trabajar con firebase 

  const db = firebase.firetore();
  const googleAuthprovider = new firebase.auth.googleAuthprovider();

  export { 
      db,
      googleAuthprovider,
      firebase
     }
     
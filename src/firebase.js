import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMCNSBPRnj-nKE3Z7EwUpOh0d1mbQoIKA",
  authDomain: "clone-87d7d.firebaseapp.com",
  databaseURL: "https://clone-87d7d.firebaseio.com",
  projectId: "clone-87d7d",
  storageBucket: "clone-87d7d.appspot.com",
  messagingSenderId: "917244129082",
  appId: "1:917244129082:web:9afc236bf70f261712aa03",
  measurementId: "G-KE32VEKG69"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
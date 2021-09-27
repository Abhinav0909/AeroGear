import firebase from 'firebase'
firebase.initializeApp({
    apiKey: "AIzaSyAnhDV-DuzP7S7LTmuBmz5NueKqqaXgAA0",
    authDomain: "aerogear-7acae.firebaseapp.com",
    projectId: "aerogear-7acae",
    storageBucket: "aerogear-7acae.appspot.com",
    messagingSenderId: "878734168764",
    appId: "1:878734168764:web:71f71a5f6007b7ede5b6b9",
    measurementId: "G-31MP11QZVD"
})


  const firestore = firebase.firestore();
  const auth = firebase.auth();

  export {firestore,auth};
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwNNa3F2JtnKvme1_DIJDgvoAY_qtOOAA",
  authDomain: "clone-97be1.firebaseapp.com",
  projectId: "clone-97be1",
  storageBucket: "clone-97be1.appspot.com",
  messagingSenderId: "148188477831",
  appId: "1:148188477831:web:5b9e45c0cd68f99529fb22",
  measurementId: "G-TFQYLLWL4Z"
};

const amazonFirebaseApp = firebase.initializeApp(firebaseConfig);

const db = amazonFirebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

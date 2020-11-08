import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbWvfj1XmAhyutvSk7JxR4RqoGDpKymlQ",
    authDomain: "tinder-clone-dc766.firebaseapp.com",
    databaseURL: "https://tinder-clone-dc766.firebaseio.com",
    projectId: "tinder-clone-dc766",
    storageBucket: "tinder-clone-dc766.appspot.com",
    messagingSenderId: "213987617396",
    appId: "1:213987617396:web:a9a8f69d00415b0e7abf21",
    measurementId: "G-HH7N8J0KGX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig );
const database = firebaseApp.firestore();
export default database;


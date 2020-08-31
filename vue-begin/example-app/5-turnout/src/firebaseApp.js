import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEl5RiUUhgqaE_vAlsuNP5UReI5uw888Y",
  authDomain: "vue-starter-37200.firebaseapp.com",
  databaseURL: "https://vue-starter-37200.firebaseio.com",
  projectId: "vue-starter-37200",
  storageBucket: "vue-starter-37200.appspot.com",
  messagingSenderId: "223473123542",
  appId: "1:223473123542:web:1712d440f2fa1e42d0c977",
  measurementId: "G-X639SPRPPN"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebaseApp
  .database()
  .ref()
  .child("events");
firebase.analytics();

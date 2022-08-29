
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWsF7sIUcym6-sU4cleHU311yeppRAwtA",
  authDomain: "fireblogsyt-887cc.firebaseapp.com",
  projectId: "fireblogsyt-887cc",
  storageBucket: "fireblogsyt-887cc.appspot.com",
  messagingSenderId: "667964015874",
  appId: "1:667964015874:web:c04d2f3fb4150c28962e1b",
  measurementId: "G-YSX0DN7LG1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestap;

export { timestamp };
export default firebaseApp.firestore();

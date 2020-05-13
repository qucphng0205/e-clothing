import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEHYw9EM9ouLG_CbHpiZzwcjw6noCdizM",
  authDomain: "e-clothings.firebaseapp.com",
  databaseURL: "https://e-clothings.firebaseio.com",
  projectId: "e-clothings",
  storageBucket: "e-clothings.appspot.com",
  messagingSenderId: "393000938833",
  appId: "1:393000938833:web:39351f656065714cf4b770",
  measurementId: "G-HZF900C9K0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const docSnapshot = await userRef.get();

  if (!docSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("Creating user document error: " + e);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const addItemsToCollection = async (collectionKey, items) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  items.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

export const convertCollectionsToMap = (collections) => {
  const shop_data = collections.docs.map((doc) => {
    const { items, title } = doc.data();
    return {
      items,
      title,
      routeName: title.toLowerCase(),
      id: doc.id,
    };
  });

  return shop_data.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection;
    return accumulator;
  }, {});
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { createUserProfileDocument };
export default firebase;

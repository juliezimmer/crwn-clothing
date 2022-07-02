import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVibNYDC9JLV7oPfYAxwLOrRCe4VkkfM8",
  authDomain: "crwn-clothing-db-430e2.firebaseapp.com",
  projectId: "crwn-clothing-db-430e2",
  storageBucket: "crwn-clothing-db-430e2.appspot.com",
  messagingSenderId: "86602548140",
  appId: "1:86602548140:web:5040331eb066565c06f009",
};

// Initialize Firebase //
const firebaseApp = initializeApp(firebaseConfig);

// Initialize a provider using GoogleAuthProvider class //
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate firestore //
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if data does NOT exist, set it in the db //
  if (!userSnapshot.exists()) {
    // destructuring //
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // set the doc with this object //
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

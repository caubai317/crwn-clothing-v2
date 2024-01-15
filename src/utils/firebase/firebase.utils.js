import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYJ4hWh3gBMjFyULrBmU65mKL9_fUSkVQ",
  authDomain: "crwn-clothing-db-88416.firebaseapp.com",
  projectId: "crwn-clothing-db-88416",
  storageBucket: "crwn-clothing-db-88416.appspot.com",
  messagingSenderId: "624576113259",
  appId: "1:624576113259:web:d76b4170ea735898789f2e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInformation
      })
    } catch (error) {
      console.log("Error when creating a user", error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || ! password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
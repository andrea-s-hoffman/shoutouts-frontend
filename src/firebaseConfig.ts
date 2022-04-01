import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA1MZyk2XTV3t-OZ03rHmxmlm5jvzudklY",
  authDomain: "shoutouts-c99d5.firebaseapp.com",
  projectId: "shoutouts-c99d5",
  storageBucket: "shoutouts-c99d5.appspot.com",
  messagingSenderId: "908210347020",
  appId: "1:908210347020:web:e86cd04c6379796abc2229"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);

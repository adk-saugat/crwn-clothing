import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxmhZw_6QRCeJkm6Nmu0qzxZpN17JA_RY",
  authDomain: "crwn-clothing-db-e0722.firebaseapp.com",
  projectId: "crwn-clothing-db-e0722",
  storageBucket: "crwn-clothing-db-e0722.firebasestorage.app",
  messagingSenderId: "215598395972",
  appId: "1:215598395972:web:06cc53893308e14d17c211",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
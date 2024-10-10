// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'collaboration-platform-ba640.firebaseapp.com',
  projectId: 'collaboration-platform-ba640',
  storageBucket: 'collaboration-platform-ba640.appspot.com',
  messagingSenderId: '248468594779',
  appId: '1:248468594779:web:9351bf2759dace5b055f7e',
  measurementId: 'G-G5KXF5SKT5',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

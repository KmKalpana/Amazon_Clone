/* For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBTkp-yArt27n7Ew14YemeM3hzq6w8U5g8',
  authDomain: 'clone-2372a.firebaseapp.com',
  projectId: 'clone-2372a',
  storageBucket: 'clone-2372a.appspot.com',
  messagingSenderId: '552587186009',
  appId: '1:552587186009:web:ec9c21e90a55bbfa7bc648',
  measurementId: 'G-4QH4R87ZP0'
}
const app = initializeApp(firebaseConfig)
// const db = firestore(app)
const auth = getAuth(app)
export { auth }
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAo6NL4Z4tXxveKNbhi4nJm_4jsge6EPRI',
  authDomain: 'clone-ebdc2.firebaseapp.com',
  projectId: 'clone-ebdc2',
  storageBucket: 'clone-ebdc2.appspot.com',
  messagingSenderId: '874618480960',
  appId: '1:874618480960:web:a75d91d77f83abf98ab2a5',
  measurementId: 'G-W8CMKM6EDQ'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }

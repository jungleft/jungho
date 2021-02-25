import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyByLYJw6lb96HvPCw4GyiwY9l-0rvIGDFw",
    authDomain: "drawing-board-e34b6.firebaseapp.com",
    projectId: "drawing-board-e34b6",
    storageBucket: "drawing-board-e34b6.appspot.com",
    messagingSenderId: "672792713866",
    appId: "1:672792713866:web:2da2214b8dde64a2742b73",
    measurementId: "G-2B1N1ZLHL2"
  })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
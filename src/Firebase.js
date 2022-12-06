
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCKpsdxM1GQeAsV0xjbqXtDmUjhuYvcbMI",
  authDomain: "chatapp-b337d.firebaseapp.com",
  projectId: "chatapp-b337d",
  storageBucket: "chatapp-b337d.appspot.com",
  messagingSenderId: "1000278998965",
  appId: "1:1000278998965:web:6d9269f7b675e59fa723fc",
  measurementId: "G-75TLZK309J"
};


const app =firebase.initializeApp(firebaseConfig);
export const auth = app.auth();



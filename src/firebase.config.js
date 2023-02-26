import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBVbyboKm2KondNoJci8AwSA-gw_lvR4vE",
    authDomain: "restaurantapp-d390f.firebaseapp.com",
    databaseURL: "https://restaurantapp-d390f-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d390f",
    storageBucket: "restaurantapp-d390f.appspot.com",
    messagingSenderId: "597105766999",
    appId: "1:597105766999:web:06bb52ec4f664dab79a912"
  };
  
  // Initialize Firebase
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage}
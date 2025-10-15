
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfez4uaWranLXW88ui-S-kZ80cs456LDA",
  authDomain: "skycast-e3880.firebaseapp.com",

  
  databaseURL: "https://skycast-e3880-default-rtdb.asia-southeast1.firebasedatabase.app/",

  projectId: "skycast-e3880",
  storageBucket: "skycast-e3880.firebasestorage.app",
  messagingSenderId: "264328867357",
  appId: "1:264328867357:web:5bc0435ab526db960de0f4"
};

//  Initialize Firebase
const app = initializeApp(firebaseConfig);

//Get Realtime Database
const db = getDatabase(app);

export { db, ref, onValue };

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// ✅ Your Firebase configuration







const app = initializeApp(firebaseConfig);


const db = getDatabase(app);

export { db, ref, onValue };

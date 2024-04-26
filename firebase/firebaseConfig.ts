import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBccfKqEZpkdXMOGU4Dq64KbkvM9X2XOdc",
  authDomain: "project-sidebar.firebaseapp.com",
  projectId: "project-sidebar",
  storageBucket: "project-sidebar.appspot.com",
  messagingSenderId: "505566746543",
  appId: "1:505566746543:web:d37600d26143a5da23c15a",
  measurementId: "G-XK4QDWGQ54"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);

export { db, storage };
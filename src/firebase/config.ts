// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { IFirebaseConfig } from "../ts/interfaces/IFirebase/IFirebaseConfig";

// Your web app's Firebase configuration
export const firebaseConfig: IFirebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_ID as string
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore();
export const collectionRef = collection(db, "users");
export const storage = getStorage(app);

export default app;
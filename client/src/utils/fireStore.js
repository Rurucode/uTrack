import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll  } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll, firebaseApp as default }
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5BUaN6eZC60gUzj9LDdqHYHI_lceqMkw",
    authDomain: "pharma-website-5f8d6.firebaseapp.com",
    projectId: "pharma-website-5f8d6",
    storageBucket: "pharma-website-5f8d6.firebasestorage.app",
    messagingSenderId: "1033199619235",
    appId: "1:1033199619235:web:79ccd517f9551bacdc0316",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };

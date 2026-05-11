import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCUVZicN3EAPYAg_LNPC-_VvMfJYXGDfY",
  authDomain: "studio-835860720-f5fa8.firebaseapp.com",
  projectId: "studio-835860720-f5fa8",
  storageBucket: "studio-835860720-f5fa8.firebasestorage.app",
  messagingSenderId: "25763595263",
  appId: "1:25763595263:web:fc462113ab8bd98124ddca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// export { app, db, auth, storage };
export { app };

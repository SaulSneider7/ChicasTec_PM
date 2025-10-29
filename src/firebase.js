import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD27LRhe5AsQ1XR2K-CXG4IpGTSNNp2rW0",
  authDomain: "fir-64-87eb3.firebaseapp.com",
  projectId: "fir-64-87eb3",
  storageBucket: "fir-64-87eb3.firebasestorage.app",
  messagingSenderId: "1014876702129",
  appId: "1:1014876702129:web:0105528407e6675252e990"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default app;
export {db};
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCW2MFzBqtMkVbfAliQttRDTyyJq5Im-eQ",
    authDomain: "emolink-vcfer.firebaseapp.com",
    databaseURL: "https://emolink-vcfer-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "emolink-vcfer",
    storageBucket: "emolink-vcfer.appspot.com",
    messagingSenderId: "178562212514",
    appId: "1:178562212514:web:76fe4aa16d2367be27adfb"
};

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL   
// };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

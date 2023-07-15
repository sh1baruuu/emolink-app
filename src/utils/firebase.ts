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

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

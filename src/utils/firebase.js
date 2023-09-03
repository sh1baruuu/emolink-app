"use strict";
exports.__esModule = true;
exports.db = exports.auth = exports.app = void 0;
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyCW2MFzBqtMkVbfAliQttRDTyyJq5Im-eQ",
    authDomain: "emolink-vcfer.firebaseapp.com",
    databaseURL: "https://emolink-vcfer-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "emolink-vcfer",
    storageBucket: "emolink-vcfer.appspot.com",
    messagingSenderId: "178562212514",
    appId: "1:178562212514:web:76fe4aa16d2367be27adfb"
};
exports.app = app_1.initializeApp(firebaseConfig);
exports.auth = auth_1.getAuth(exports.app);
exports.db = firestore_1.getFirestore(exports.app);

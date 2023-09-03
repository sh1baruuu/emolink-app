"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.currentUser = exports.onSignOut = exports.onSignIn = void 0;
var firebase_1 = require("./firebase");
var auth_1 = require("firebase/auth");
exports.onSignIn = function (email, password) { return __awaiter(void 0, void 0, Promise, function () {
    var credentials, user, uid, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, auth_1.setPersistence(firebase_1.auth, auth_1.browserSessionPersistence)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, auth_1.signInWithEmailAndPassword(firebase_1.auth, email, password)];
            case 3:
                credentials = _a.sent();
                user = credentials.user;
                uid = user.uid;
                return [2 /*return*/, { uid: uid }];
            case 4:
                error_1 = _a.sent();
                alert(error_1.message);
                return [2 /*return*/, { uid: '', error: error_1 }];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.onSignOut = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, auth_1.signOut(firebase_1.auth)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// export const onSignIn = async (email: string, password: string): Promise<void> => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     try {
//         await signInWithEmailAndPassword(auth, email, password)
//         alert('Logged in')
//     } catch (error: AuthError | any) {
//         if (email === '') {
//         setEmailError('Please enter your email address.')
//         } else if (error.code === 'auth/invalid-email' || !emailRegex.test(email)) {
//         setEmailError('Invalid email format.')
//         } else if (error.code === 'auth/user-not-found') {
//         setEmailError('User not found.')
//         } else if (error.code === 'auth/missing-password') {
//         setPasswordError('Please enter your password.')
//         } else if (password.length < 8) {
//         setPasswordError('Password should be at least 8 characters long.')
//         } else if (error.code === 'auth/wrong-password') {
//         setPasswordError('Incorrect password.')
//         } else if (error.code === 'auth/user-disabled') {
//         setEmailError('Your account has been disabled. Please contact support.')
//         } else if (error.code === 'auth/too-many-requests') {
//         setEmailError('Too many attempt. Please try again later.');
//         } else {
//         setEmailError(error.code);
//         }
//     }
//     setSubmitLoader(false)
// }
exports.currentUser = function () {
    var user = firebase_1.auth.currentUser;
    if (user) {
        var uid = user.uid;
        return uid;
    }
    else {
        return null;
    }
};

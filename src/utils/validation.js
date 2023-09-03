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
exports.validatePassword = exports.handlePasswordError = exports.handleEmailError = void 0;
var handleEmailError = function (error) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        if (error.code === 'auth/invalid-email') {
            return [2 /*return*/, 'Invalid email format.'];
        }
        else if (error.code === 'auth/email-already-in-use') {
            return [2 /*return*/, 'The email address you entered is already in use.'];
        }
        else if (error.code === 'auth/user-not-found') {
            return [2 /*return*/, 'User not found.'];
        }
        else if (error.code === 'auth/network-request-failed') {
            return [2 /*return*/, 'Please check your  internet connection and try again.'];
        }
        console.log("email");
        return [2 /*return*/, ''];
    });
}); };
exports.handleEmailError = handleEmailError;
var handlePasswordError = function (error) { return __awaiter(void 0, void 0, Promise, function () {
    var errorObj;
    return __generator(this, function (_a) {
        errorObj = {};
        if (error.message === 'pass/is-empty') {
            errorObj.passErr = 'Password cannot be empty.';
        }
        else if (error.code === 'auth/missing-password') {
            errorObj.passErr = 'Password cannot be empty.';
        }
        else if (error.code === 'auth/missing-password') {
            errorObj.passErr = 'Password cannot be empty.';
        }
        else if (error.code === 'auth/weak-password') {
            errorObj.passErr = 'Password should be at least 6 characters.';
        }
        else if (error.message === 'pass/test-failed') {
            errorObj.passErr = 'Password must contain an uppercase letter, one symbol, and one number.';
        }
        else if (error.message === 'pass/not-match') {
            errorObj.confErr = 'Confirm password did not match.';
        }
        console.log("password");
        return [2 /*return*/, errorObj];
    });
}); };
exports.handlePasswordError = handlePasswordError;
var validatePassword = function (password, confirm) { return __awaiter(void 0, void 0, void 0, function () {
    var passwordRegex;
    return __generator(this, function (_a) {
        passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
        if (password.trim().length === 0) {
            return [2 /*return*/, 'pass/is-empty'];
        }
        else if (!passwordRegex.test(password)) {
            return [2 /*return*/, 'pass/test-failed'];
        }
        else if (password !== confirm) {
            return [2 /*return*/, 'pass/not-match'];
        }
        else {
            return [2 /*return*/];
        }
        return [2 /*return*/];
    });
}); };
exports.validatePassword = validatePassword;

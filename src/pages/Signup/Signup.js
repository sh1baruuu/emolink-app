"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("@ionic/react");
require("./Signup.scss");
var react_2 = require("react");
var logoV2_png_1 = require("../../assets/logoV2.png");
var signup_1 = require("../../utils/signup");
var StepOne_1 = require("./StepOne");
var StepTwo_1 = require("./StepTwo");
var StepThree_1 = require("./StepThree");
var firestore_1 = require("../../utils/firestore");
var react_router_1 = require("react-router");
var uid_1 = require("../../utils/uid");
var SignUp = function () {
    var history = react_router_1.useHistory();
    var _a = react_2.useState(""), firstnameError = _a[0], setFirstnameError = _a[1];
    var _b = react_2.useState(""), lastnameError = _b[0], setLastnameError = _b[1];
    var _c = react_2.useState(""), genderError = _c[0], setGenderError = _c[1];
    var _d = react_2.useState(""), birthdayError = _d[0], setBirthdayError = _d[1];
    var _e = react_2.useState(""), emailError = _e[0], setEmailError = _e[1];
    var _f = react_2.useState(""), passwordError = _f[0], setPasswordError = _f[1];
    var _g = react_2.useState(""), confirmError = _g[0], setConfirmError = _g[1];
    var _h = react_2.useState(false), showDatePicker = _h[0], setShowDatePicker = _h[1];
    var _j = react_2.useState(1), step = _j[0], setStep = _j[1];
    var userData = {
        userId: uid_1.generateUniqueId(),
        firstname: "",
        lastname: "",
        gender: "",
        birthday: "",
        interest: [],
        isVolunteer: false,
        email: "",
        password: "",
        confirm: ""
    };
    var _k = react_2.useState(userData), userFormData = _k[0], setUserFormData = _k[1];
    var firstname = userFormData.firstname, lastname = userFormData.lastname, gender = userFormData.gender, birthday = userFormData.birthday, interest = userFormData.interest, isVolunteer = userFormData.isVolunteer, email = userFormData.email, password = userFormData.password, confirm = userFormData.confirm;
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setUserFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = name === 'birthday' ? value.slice(0, 10) : value, _a)));
        });
        if (name === "birthday") {
            handleDatePicker();
        }
    };
    var resetUserFormData = function () {
        setUserFormData(userData);
    };
    var handleDatePicker = function () {
        setShowDatePicker(function (prevState) { return !prevState; });
    };
    var goToStep = function (num, next) {
        var message = 'This field cannot be empty';
        if (next && step === 1) {
            if (firstname === "") {
                setFirstnameError(message);
            }
            if (lastname === "") {
                setLastnameError(message);
            }
            {
                firstname && lastname && setStep(2);
            }
        }
        else if (next && step === 2) {
            if (gender === "") {
                setBirthdayError(message);
            }
            if (interest.length >= 3) {
                setBirthdayError(message);
            }
            if (birthday === "") {
                setBirthdayError(message);
            }
            {
                birthday && interest.length >= 3 && setStep(num);
            }
        }
        else if (!next && step === 2) {
            setStep(num);
        }
        else {
            setStep(num);
        }
    };
    var goToSignIn = function () {
        resetUserFormData();
        setStep(1);
    };
    var _l = react_2.useState(false), buttonDisable = _l[0], setButtonDisable = _l[1];
    var handleInputFocus = function () {
        setEmailError('');
        setPasswordError('');
        setConfirmError('');
        setButtonDisable(false);
    };
    var _m = react_2.useState(false), isLoading = _m[0], setIsLoading = _m[1];
    var _o = react_2.useState(false), isRegistered = _o[0], setIsRegistered = _o[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var result, uid, _a, emailErr, passErr, confErr;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setIsLoading(true);
                    return [4 /*yield*/, signup_1.onSignUp(email, password, confirm)];
                case 1:
                    result = _b.sent();
                    uid = result.uid;
                    _a = result.errorList, emailErr = _a.emailErr, passErr = _a.passErr, confErr = _a.confErr;
                    if (!result.success) return [3 /*break*/, 3];
                    return [4 /*yield*/, firestore_1.writeUserData(uid, userFormData)];
                case 2:
                    _b.sent();
                    resetUserFormData();
                    setStep(1);
                    history.push('/signin');
                    return [3 /*break*/, 4];
                case 3:
                    if (emailErr !== '') {
                        setEmailError(emailErr);
                    }
                    else if (passErr) {
                        setPasswordError(passErr);
                    }
                    else if (confErr !== '') {
                        setConfirmError(confErr);
                    }
                    setButtonDisable(true);
                    _b.label = 4;
                case 4:
                    setIsLoading(false);
                    setIsRegistered(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonToast, { isOpen: isRegistered, message: "You are now registered", onDidDismiss: function () { return setIsRegistered(false); }, duration: 3000, position: 'top', color: 'light' }),
        React.createElement(react_1.IonLoading, { isOpen: isLoading, onDidDismiss: function () { return setIsLoading(false); }, message: 'Signing up...' }),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "sign-container column" },
                React.createElement(react_1.IonImg, { className: 'logo', src: logoV2_png_1["default"], alt: '' }),
                React.createElement("h1", null, "Sign Up Now"),
                React.createElement("p", null, "Please signup to continue our app"),
                React.createElement("form", { onSubmit: handleSubmit },
                    step === 1 &&
                        React.createElement(StepOne_1["default"], { firstname: firstname, lastname: lastname, isVolunteer: isVolunteer, onChange: handleChange, next: function () { return goToStep(2, true); } }),
                    step === 2 &&
                        React.createElement(StepTwo_1["default"], { gender: gender, birthday: birthday, interest: interest, onChange: handleChange, onDatePicker: handleDatePicker, datePickerState: showDatePicker, next: function () { return goToStep(3, true); }, previous: function () { return goToStep(1, false); } }),
                    step === 3 &&
                        React.createElement(StepThree_1["default"], { email: email, password: password, confirm: confirm, onChange: handleChange, previous: function () { return goToStep(2, false); }, emailErr: emailError, passErr: passwordError, confErr: confirmError, onFocus: handleInputFocus, isButtonDisable: buttonDisable })))),
        React.createElement(react_1.IonFooter, { className: "ion-no-border" },
            React.createElement("p", { className: "footer" },
                "Already have an account?",
                React.createElement(react_1.IonButton, { className: 'button', routerLink: '/signin', onClick: goToSignIn, fill: 'clear', size: 'small' }, "SignIn")))));
};
exports["default"] = SignUp;

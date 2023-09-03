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
require("./Signin.scss");
var react_2 = require("react");
var logoV2_png_1 = require("../../assets/logoV2.png");
var signin_1 = require("../../utils/signin");
var ForgotPasswordModal_1 = require("../../components/ForgotPasswordModal");
var react_router_1 = require("react-router");
var UserDataContext_1 = require("../../context/UserDataContext");
var SignIn = function () {
    var history = react_router_1.useHistory();
    var data = { email: '', password: '' };
    var _a = react_2.useState(data), formData = _a[0], setFormData = _a[1];
    var email = formData.email, password = formData.password;
    var signinUser = react_2.useContext(UserDataContext_1.UserDataContext).signinUser;
    var handleOnInput = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var _b = react_2.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_2.useState(false), isSignedIn = _c[0], setIsSignedIn = _c[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setIsLoading(true);
                    return [4 /*yield*/, signin_1.onSignIn(email, password)];
                case 1:
                    res = _a.sent();
                    setIsLoading(false);
                    if (res.uid !== '') {
                        // setIsSignedIn(true)
                        // setTimeout(() => {
                        // }, 2000);
                        signinUser(res.uid);
                        history.push('/user', { uid: res.uid });
                    }
                    setFormData(data);
                    return [2 /*return*/];
            }
        });
    }); };
    var _d = react_2.useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var toggleModal = function () {
        setIsModalOpen(function (prevState) { return !prevState; });
    };
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonLoading, { isOpen: isLoading, onDidDismiss: function () { return setIsLoading(false); }, message: 'Signing in...' }),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "sign-container column" },
                React.createElement(react_1.IonImg, { className: 'logo', src: logoV2_png_1["default"], alt: '' }),
                React.createElement("h1", null, "Log In Now"),
                React.createElement("p", null, "Please login to continue our app"),
                React.createElement("form", { onSubmit: handleSubmit },
                    React.createElement(react_1.IonInput, { shape: 'round', type: "email", fill: "outline", label: 'Email address', labelPlacement: 'floating', name: 'email', value: email, onIonInput: handleOnInput }),
                    React.createElement(react_1.IonInput, { shape: 'round', type: "password", fill: "outline", label: 'Password', labelPlacement: 'floating', name: 'password', value: password, onIonInput: handleOnInput }),
                    React.createElement(react_1.IonButton, { type: "submit", shape: "round", expand: "full", size: "large", className: "submit" }, "Log In"),
                    React.createElement(react_1.IonButton, { type: "button", onClick: toggleModal, fill: "clear", size: "small", className: "forgotPassword" }, "Forgot password?"))),
            React.createElement(ForgotPasswordModal_1["default"], { isOpen: isModalOpen, toggle: toggleModal })),
        React.createElement(react_1.IonFooter, { className: "ion-no-border" },
            React.createElement("p", { className: "footer" },
                "Don't have an account?",
                React.createElement(react_1.IonButton, { className: 'button', routerLink: '/signup', fill: 'clear', size: 'small' }, "SignUp")))));
};
exports["default"] = SignIn;

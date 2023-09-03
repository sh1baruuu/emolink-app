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
var react_1 = require("@ionic/react");
require("./components.scss");
var react_2 = require("react");
var forgotPassword_utils_1 = require("../utils/forgotPassword.utils");
var icons_1 = require("ionicons/icons");
var ForgotPasswordModal = function (props) {
    var _a = react_2.useState(""), email = _a[0], setEmail = _a[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, forgotPassword_utils_1.onResetPassword(email)];
                case 1:
                    result = _a.sent();
                    alert(result);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_1.IonModal, { isOpen: props.isOpen, className: 'modal-container', onDidDismiss: props.toggle },
        React.createElement("div", null,
            React.createElement(react_1.IonText, { "class": "forgot-password-txt" },
                React.createElement(react_1.IonIcon, { className: 'icon', icon: icons_1.key, size: 'large' }),
                React.createElement("h1", null, "Forgot Password?"),
                React.createElement("p", null,
                    "Enter your email address below and we will",
                    React.createElement("br", null),
                    "send you a link to reset your password")),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("input", { type: "email", name: 'email', onChange: function (e) { setEmail(e.target.value); }, placeholder: "Email adress", value: email }),
                React.createElement(react_1.IonItem, { lines: "none" },
                    React.createElement(react_1.IonButtons, { slot: "start" },
                        React.createElement(react_1.IonButton, { type: 'button', color: "medium", onClick: props.toggle }, "Cancel")),
                    React.createElement(react_1.IonButtons, { slot: "end" },
                        React.createElement(react_1.IonButton, { type: 'submit', className: 'button' }, "Confirm")))))));
};
exports["default"] = ForgotPasswordModal;

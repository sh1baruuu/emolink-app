"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Signup.scss");
var InputErrorMessage_1 = require("../../components/InputErrorMessage");
var StepThree = function (_a) {
    var email = _a.email, password = _a.password, confirm = _a.confirm, onChange = _a.onChange, onFocus = _a.onFocus, previous = _a.previous, emailErr = _a.emailErr, passErr = _a.passErr, confErr = _a.confErr, isButtonDisable = _a.isButtonDisable;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.IonInput, { className: emailErr ? 'error' : '', id: 'error', shape: 'round', autocomplete: 'off', type: "email", fill: "outline", label: 'Email address', labelPlacement: 'floating', name: 'email', value: email, onIonInput: onChange, onIonFocus: onFocus }),
        React.createElement(InputErrorMessage_1["default"], { message: emailErr }),
        React.createElement(react_1.IonInput, { className: passErr ? 'error' : '', shape: 'round', autocomplete: 'off', type: "password", fill: "outline", label: 'Password', labelPlacement: 'floating', name: 'password', value: password, onIonInput: onChange, onIonFocus: onFocus }),
        React.createElement(InputErrorMessage_1["default"], { message: passErr }),
        React.createElement(react_1.IonInput, { className: confErr ? 'error' : '', shape: 'round', autocomplete: 'off', type: "password", fill: "outline", label: 'Confirm password', labelPlacement: 'floating', name: 'confirm', value: confirm, onIonInput: onChange, onIonFocus: onFocus }),
        React.createElement(InputErrorMessage_1["default"], { message: confErr }),
        React.createElement(react_1.IonButton, { type: "submit", shape: "round", expand: "full", disabled: isButtonDisable, size: "large", className: "submit" }, "Sign Up"),
        React.createElement(react_1.IonButton, { type: "button", color: 'medium', fill: 'outline', shape: "round", expand: "full", size: "large", className: "previous", onClick: previous }, "Previous")));
};
exports["default"] = StepThree;

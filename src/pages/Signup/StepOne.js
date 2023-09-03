"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Signup.scss");
var StepOne = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname, isVolunteer = _a.isVolunteer, onChange = _a.onChange, next = _a.next;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.IonInput, { shape: 'round', type: "text", fill: "outline", label: 'Firstname', labelPlacement: 'floating', name: 'firstname', value: firstname, onIonInput: onChange }),
        React.createElement(react_1.IonInput, { shape: 'round', type: "text", fill: "outline", label: 'Lastname', labelPlacement: 'floating', name: 'lastname', value: lastname, onIonInput: onChange }),
        React.createElement(react_1.IonSelect, { fill: 'outline', name: 'isVolunteer', value: isVolunteer ? "true" : "false", onIonChange: onChange, shape: 'round', className: 'selection', label: "Are you volunteer?", labelPlacement: "floating" },
            React.createElement(react_1.IonSelectOption, { value: 'true' }, "Yes"),
            React.createElement(react_1.IonSelectOption, { value: 'false' }, "No")),
        React.createElement(react_1.IonButton, { type: "button", shape: "round", expand: "full", size: "large", onClick: next, className: "next" }, "Next")));
};
exports["default"] = StepOne;

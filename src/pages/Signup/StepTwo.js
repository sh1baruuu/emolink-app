"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Signup.scss");
var StepTwo = function (_a) {
    var gender = _a.gender, birthday = _a.birthday, interest = _a.interest, onChange = _a.onChange, datePickerState = _a.datePickerState, onDatePicker = _a.onDatePicker, next = _a.next, previous = _a.previous;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.IonSelect, { fill: 'outline', onIonChange: onChange, value: gender, shape: 'round', name: 'gender', className: 'selection', label: "Gender", labelPlacement: "floating" },
            React.createElement(react_1.IonSelectOption, { value: "male" }, "Male"),
            React.createElement(react_1.IonSelectOption, { value: "female" }, "Female"),
            React.createElement(react_1.IonSelectOption, { value: "other" }, "Non-Binary")),
        React.createElement(react_1.IonInput, { readonly: true, shape: 'round', fill: "outline", label: 'Birthday', labelPlacement: 'floating', value: birthday, onClick: onDatePicker }),
        React.createElement(react_1.IonModal, { isOpen: datePickerState, className: 'date-modal', keepContentsMounted: true },
            React.createElement("div", { className: 'column' },
                React.createElement(react_1.IonDatetime, { id: "datetime", name: 'birthday', value: birthday, onIonChange: onChange }))),
        React.createElement(react_1.IonSelect, { fill: 'outline', shape: 'round', className: 'selection', label: "Interest", name: 'interest', multiple: true, value: interest, onIonChange: onChange, labelPlacement: "floating" },
            React.createElement(react_1.IonSelectOption, { value: "interestOne" }, "One"),
            React.createElement(react_1.IonSelectOption, { value: "interestTwo" }, "Two"),
            React.createElement(react_1.IonSelectOption, { value: "interestThree" }, "Three")),
        React.createElement(react_1.IonButton, { type: "button", shape: "round", expand: "full", size: "large", className: "next", onClick: next }, "Next"),
        React.createElement(react_1.IonButton, { type: "button", color: 'medium', fill: 'outline', shape: "round", expand: "full", size: "large", className: "previous", onClick: previous }, "Previous")));
};
exports["default"] = StepTwo;

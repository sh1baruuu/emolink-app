"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var Header_1 = require("../../components/Header");
require("./MatchingRoom.scss");
var react_router_1 = require("react-router");
var react_2 = require("react");
var MatchingRoom = function () {
    var history = react_router_1.useHistory();
    var _a = react_2.useState('Matching started...'), message = _a[0], setMessage = _a[1];
    setTimeout(function () {
        setMessage('Please wait...');
    }, 4000);
    setTimeout(function () {
        setMessage('Matched');
        history.push('/meet');
    }, 6000);
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "mr-container column" },
                React.createElement(Header_1["default"], { title: "Match", darked: false }),
                React.createElement("div", { className: 'container column' },
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    message && React.createElement(react_1.IonLabel, null, message),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" }),
                    React.createElement(react_1.IonSpinner, { name: "circles" })),
                React.createElement(react_1.IonButton, { routerLink: '/user', color: 'warning', className: "stop" }, "Cancel")))));
};
exports["default"] = MatchingRoom;

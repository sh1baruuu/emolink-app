"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var EmptyMessage_1 = require("../../components/EmptyMessage");
var Header_1 = require("../../components/Header");
require("./About.scss");
var About = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "about-container column" },
                React.createElement(Header_1["default"], { title: 'About', bordered: true, darked: true }),
                React.createElement("div", { className: 'container column' },
                    React.createElement(EmptyMessage_1["default"], { message: 'About will display here' }))))));
};
exports["default"] = About;

"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var Header_1 = require("../../../components/Header");
require("./Settings.scss");
var EmptyMessage_1 = require("../../../components/EmptyMessage");
var Settings = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "chats-container column" },
                React.createElement(Header_1["default"], { title: 'Settings', bordered: true, darked: true }),
                React.createElement("div", { className: 'container column' },
                    React.createElement(EmptyMessage_1["default"], { message: 'Settings will show here' }))))));
};
exports["default"] = Settings;

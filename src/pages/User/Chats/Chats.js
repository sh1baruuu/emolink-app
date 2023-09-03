"use strict";
exports.__esModule = true;
require("./Chats.scss");
var Header_1 = require("../../../components/Header");
var react_1 = require("@ionic/react");
var EmptyMessage_1 = require("../../../components/EmptyMessage");
var Chats = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "chats-container column" },
                React.createElement(Header_1["default"], { title: 'Chats', bordered: true, darked: true }),
                React.createElement("div", { className: 'container column' },
                    React.createElement(EmptyMessage_1["default"], { message: 'Your messages will display here' }))))));
};
exports["default"] = Chats;

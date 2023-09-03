"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var Header_1 = require("../../../components/Header");
require("./People.scss");
var EmptyMessage_1 = require("../../../components/EmptyMessage");
var People = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "chats-container column" },
                React.createElement(Header_1["default"], { title: 'People', bordered: true, darked: true }),
                React.createElement("div", { className: 'container column' },
                    React.createElement(EmptyMessage_1["default"], { message: 'People will show here' }))))));
};
exports["default"] = People;

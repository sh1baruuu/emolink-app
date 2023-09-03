"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var RoomContext_1 = require("../context/RoomContext");
var JoinButton = function () {
    var ws = react_2.useContext(RoomContext_1.RoomContext).ws;
    var joinRoom = function () {
        ws.emit('create-room');
    };
    return (React.createElement(react_1.IonButton, { onClick: joinRoom }, "Join Room"));
};
exports["default"] = JoinButton;

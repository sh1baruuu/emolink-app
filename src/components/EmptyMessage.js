"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./components.scss");
var EmptyMessage = function (_a) {
    var message = _a.message;
    return (React.createElement("span", { className: 'empty-message column' },
        React.createElement(react_1.IonLabel, null, message)));
};
exports["default"] = EmptyMessage;

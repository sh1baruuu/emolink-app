"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./components.scss");
var icons_1 = require("ionicons/icons");
var InputErrorMessage = function (_a) {
    var message = _a.message;
    return (React.createElement(React.Fragment, null, message && (React.createElement("p", { className: "errorMessage" },
        React.createElement(react_1.IonIcon, { className: 'errorIcon', icon: icons_1.alertCircleOutline }),
        message))));
};
exports["default"] = InputErrorMessage;

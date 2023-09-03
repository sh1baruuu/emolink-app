"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./components.scss");
var react_2 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var Header = function (_a) {
    var title = _a.title, link = _a.link, darked = _a.darked, bordered = _a.bordered, children = _a.children;
    var style = darked ? 'dark' : 'light';
    return (react_1["default"].createElement(react_2.IonHeader, { className: (bordered ? '' : 'ion-no-border') + " header" },
        react_1["default"].createElement(react_2.IonToolbar, null,
            react_1["default"].createElement(react_2.IonButton, { slot: 'start', fill: 'clear', shape: 'round', routerLink: link || '/user' },
                react_1["default"].createElement(react_2.IonIcon, { className: style, slot: '', icon: icons_1.arrowBackSharp })),
            react_1["default"].createElement(react_2.IonTitle, { className: style }, title),
            children)));
};
exports["default"] = Header;

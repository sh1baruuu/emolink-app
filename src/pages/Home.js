"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Home.scss");
var logo_png_1 = require("../assets/logo.png");
var Home = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: 'home-container column' },
                React.createElement(react_1.IonText, { "class": 'greet' }, "WELCOME T0"),
                React.createElement(react_1.IonImg, { src: logo_png_1["default"], alt: 'l', "class": 'logo' }),
                React.createElement(react_1.IonText, { "class": 'desc' },
                    "Experience the power of facial emotion recognition",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "in our integrated video conferencing app"),
                React.createElement(react_1.IonButton, { fill: 'outline', shape: 'round', routerLink: '/signin', className: 'getStarted' }, "Get started")))));
};
exports["default"] = Home;

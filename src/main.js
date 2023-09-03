"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var UserDataContext_1 = require("./context/UserDataContext");
var container = document.getElementById('root');
var root = client_1.createRoot(container);
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(UserDataContext_1.UserDataProvider, null,
            react_1["default"].createElement(App_1["default"], null)))));

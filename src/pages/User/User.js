"use strict";
exports.__esModule = true;
var react_router_1 = require("react-router");
var Dashboard_1 = require("./Dashboard/Dashboard");
var User = function () {
    var location = react_router_1.useLocation();
    var state = location.state;
    var uid = (state === null || state === void 0 ? void 0 : state.uid) || '';
    return (React.createElement(Dashboard_1["default"], { uid: uid }));
};
exports["default"] = User;

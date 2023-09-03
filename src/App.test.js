"use strict";
exports.__esModule = true;
// import React from 'react';
var react_1 = require("@testing-library/react");
var App_1 = require("./App");
test('renders without crashing', function () {
    var baseElement = react_1.render(React.createElement(App_1["default"], null)).baseElement;
    expect(baseElement).toBeDefined();
});

"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
require("./global.scss");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
/* Pages import */
var Home_1 = require("./pages/Home");
var Signup_1 = require("./pages/Signup/Signup");
var Signin_1 = require("./pages/Signin/Signin");
var Meet_1 = require("./pages/Meet/Meet");
var User_1 = require("./pages/User/User");
var Profile_1 = require("./pages/User/Profile/Profile");
var Edit_1 = require("./pages/User/Profile/Edit");
var Chats_1 = require("./pages/User/Chats/Chats");
var People_1 = require("./pages/User/People/People");
var Settings_1 = require("./pages/User/Settings/Settings");
var About_1 = require("./pages/About/About");
var MatchingRoom_1 = require("./pages/MatchingRoom/MatchingRoom");
react_1.setupIonicReact();
var App = function () { return (React.createElement(react_1.IonApp, null,
    React.createElement(react_router_1.IonReactRouter, null,
        React.createElement(react_1.IonRouterOutlet, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/home", component: Home_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/signin", component: Signin_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/signup", component: Signup_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user", component: User_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/:id", component: User_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/meet", component: Meet_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/about", component: About_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/profile", component: Profile_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/profile/edit", component: Edit_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/chats", component: Chats_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/people", component: People_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/user/settings", component: Settings_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/matching", component: MatchingRoom_1["default"] }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/meet", component: Meet_1["default"] }),
            React.createElement(react_router_dom_1.Redirect, { exact: true, from: "/", to: "/home" }))))); };
exports["default"] = App;

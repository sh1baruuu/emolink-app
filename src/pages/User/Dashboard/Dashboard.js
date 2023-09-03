"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var signin_1 = require("../../../utils/signin");
var firestore_1 = require("../../../utils/firestore");
var react_2 = require("react");
var avatar_jpeg_1 = require("../../../assets/avatar.jpeg");
var react_router_1 = require("react-router");
var Menu_1 = require("../Menu");
require("./Dashboard.scss");
var UserDataContext_1 = require("../../../context/UserDataContext");
var Dashboard = function (_a) {
    var uid = _a.uid;
    var history = react_router_1.useHistory();
    var signoutUser = react_2.useContext(UserDataContext_1.UserDataContext).signoutUser;
    var _b = react_2.useState(false), isOption = _b[0], setIsOption = _b[1];
    var notifRef = react_2.useRef(null);
    var _c = react_2.useState(false), notifOpen = _c[0], setNotifOpen = _c[1];
    var helpRef = react_2.useRef(null);
    var _d = react_2.useState(false), helpOpen = _d[0], setHelpOpen = _d[1];
    var handleActionSheet = function (action) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsOption(false);
                    if (!(action === 'signout')) return [3 /*break*/, 2];
                    return [4 /*yield*/, signin_1.onSignOut()];
                case 1:
                    _a.sent();
                    signoutUser();
                    history.push('/signin');
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var openNotif = function (e) {
        notifRef.current.event = e;
        setNotifOpen(true);
    };
    var openHelp = function (e) {
        helpRef.current.event = e;
        setHelpOpen(true);
    };
    var openActionSheet = function () {
        setIsOption(function (prev) { return !prev; });
    };
    var _e = react_2.useState(), userData = _e[0], setUserData = _e[1];
    react_2.useEffect(function () {
        var data = function () { return __awaiter(void 0, void 0, void 0, function () {
            var myid, myData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myid = signin_1.currentUser();
                        if (!myid) return [3 /*break*/, 2];
                        return [4 /*yield*/, firestore_1.getUserData(myid)];
                    case 1:
                        myData = _a.sent();
                        setUserData(myData);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        data();
    }, [uid]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Menu_1["default"], null),
        React.createElement(react_1.IonPage, { id: "main-content" },
            React.createElement(react_1.IonActionSheet, { mode: "ios", isOpen: isOption, header: "Do you want to sign out?", buttons: [
                    {
                        text: 'SignOut',
                        role: 'destructive',
                        handler: function () { return handleActionSheet('signout'); }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () { return handleActionSheet('cancel'); }
                    },
                ] }),
            React.createElement(react_1.IonHeader, { className: "ion-no-border" },
                React.createElement(react_1.IonToolbar, { className: "toolbar" },
                    React.createElement(react_1.IonButtons, { slot: "start" },
                        React.createElement(react_1.IonMenuButton, null)),
                    React.createElement(react_1.IonButton, { slot: "end", fill: 'clear', onClick: openHelp },
                        React.createElement(react_1.IonIcon, { icon: icons_1.helpCircleSharp })),
                    React.createElement(react_1.IonButton, { slot: "end", fill: 'clear', onClick: openNotif },
                        React.createElement(react_1.IonIcon, { icon: icons_1.notifications })),
                    React.createElement(react_1.IonButton, { slot: "end", fill: 'clear', onClick: openActionSheet },
                        React.createElement(react_1.IonIcon, { icon: icons_1.ellipsisVertical })),
                    React.createElement(react_1.IonAvatar, { slot: 'end', onClick: function () { history.push('user/profile'); } },
                        React.createElement(react_1.IonImg, { src: avatar_jpeg_1["default"], alt: '' })))),
            React.createElement(react_1.IonPopover, { ref: notifRef, isOpen: notifOpen, onDidDismiss: function () { return setNotifOpen(false); } },
                React.createElement("div", { className: "container" },
                    React.createElement("p", null, "Notifications"))),
            React.createElement(react_1.IonPopover, { ref: helpRef, isOpen: helpOpen, onDidDismiss: function () { return setHelpOpen(false); } },
                React.createElement("div", { className: "container" },
                    React.createElement("p", null, "Help"))),
            React.createElement(react_1.IonContent, { fullscreen: true, className: 'main' },
                React.createElement("div", { className: "container" },
                    React.createElement("h1", null, "Home"),
                    React.createElement(react_1.IonButton, { color: 'light', className: "cont-one", routerLink: '/matching' },
                        React.createElement(react_1.IonIcon, { icon: icons_1.videocamOutline })),
                    React.createElement("div", { className: "cont-two" }))))));
};
exports["default"] = Dashboard;

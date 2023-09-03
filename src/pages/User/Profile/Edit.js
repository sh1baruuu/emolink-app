"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
require("./Profile.scss");
var Header_1 = require("../../../components/Header");
var react_2 = require("react");
var UserDataContext_1 = require("../../../context/UserDataContext");
var Edit = function () {
    var _a = react_2.useState(), user = _a[0], setUser = _a[1];
    var userData = react_2.useContext(UserDataContext_1.UserDataContext).userData;
    react_2.useEffect(function () {
        setUser(userData);
    });
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: "edit-container column" },
                React.createElement(Header_1["default"], { title: 'Edit Profile', link: '/user/profile', darked: true }),
                React.createElement("div", { className: "container column" },
                    React.createElement(react_1.IonAvatar, { onClick: function () { return alert("Create a function for change photo"); } },
                        React.createElement(react_1.IonIcon, { icon: icons_1.cameraOutline, size: 'large' })),
                    React.createElement(react_1.IonLabel, null, "Change photo"),
                    React.createElement(react_1.IonItemDivider, null, "About Me"),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, "Firstname"),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, user === null || user === void 0 ? void 0 : user.firstname)),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, "Lastname"),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, user === null || user === void 0 ? void 0 : user.lastname)),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, "Gender"),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, user === null || user === void 0 ? void 0 : user.gender)),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, "Birthday"),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, user === null || user === void 0 ? void 0 : user.birthday)),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, "Bio"),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, "Hello World!!!")),
                    React.createElement(react_1.IonItem, { lines: 'none', button: true, detail: true },
                        React.createElement(react_1.IonLabel, { slot: 'start' }, user === null || user === void 0 ? void 0 : user.interest.join(", ")),
                        React.createElement(react_1.IonLabel, { slot: 'end' }, "InterestOne, InterestTwo")))))));
};
exports["default"] = Edit;

"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var UserDataContext_1 = require("../../../context/UserDataContext");
var icons_1 = require("ionicons/icons");
var react_router_1 = require("react-router");
var react_2 = require("react");
var avatar_jpeg_1 = require("../../../assets/avatar.jpeg");
var Header_1 = require("../../../components/Header");
require("./Profile.scss");
var Profile = function () {
    var match = react_router_1.useRouteMatch();
    var history = react_router_1.useHistory();
    var _a = react_2.useState(), user = _a[0], setUser = _a[1];
    var userData = react_2.useContext(UserDataContext_1.UserDataContext).userData;
    react_2.useEffect(function () {
        setUser(userData);
    });
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { scrollEvents: true },
            React.createElement("div", { className: 'profile-container column' },
                React.createElement("div", { className: 'card column' },
                    React.createElement(Header_1["default"], { title: 'Profile' },
                        React.createElement(react_1.IonButton, { slot: 'end', fill: 'clear', shape: 'round' },
                            React.createElement(react_1.IonIcon, { slot: '', icon: icons_1.settingsOutline }))),
                    React.createElement(react_1.IonAvatar, null,
                        React.createElement(react_1.IonImg, { src: avatar_jpeg_1["default"], alt: '' })),
                    React.createElement("span", { className: 'desc' },
                        React.createElement("h2", null, (user === null || user === void 0 ? void 0 : user.firstname) + " " + (user === null || user === void 0 ? void 0 : user.lastname)),
                        React.createElement("p", null,
                            "ID: ", user === null || user === void 0 ? void 0 :
                            user.userId)),
                    React.createElement("span", { className: 'follow' },
                        React.createElement(react_1.IonItem, { button: true },
                            React.createElement(react_1.IonLabel, null),
                            React.createElement("h4", null, "1240"),
                            React.createElement("p", null, "Followers")),
                        React.createElement(react_1.IonItem, null, "|"),
                        React.createElement(react_1.IonItem, { button: true },
                            React.createElement(react_1.IonLabel, null),
                            React.createElement("h4", null, "235"),
                            React.createElement("p", null, "Following")))),
                React.createElement(react_1.IonItemDivider, null),
                React.createElement("div", { className: 'information column' },
                    React.createElement("div", { className: 'wrapper' }, "   "),
                    React.createElement(react_1.IonItemDivider, null,
                        React.createElement(react_1.IonLabel, null, "Your Information"),
                        React.createElement(react_1.IonButton, { fill: 'clear', onClick: function () { return history.push(match.url + "/edit"); }, color: 'dark', slot: 'end', size: 'large' },
                            React.createElement(react_1.IonIcon, { icon: icons_1.createOutline }))),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Email"),
                        React.createElement(react_1.IonInput, { "aria-label": 'email', className: 'disabled', value: user === null || user === void 0 ? void 0 : user.email })),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Firstname"),
                        React.createElement(react_1.IonInput, { "aria-label": 'firstname', value: user === null || user === void 0 ? void 0 : user.firstname })),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Lastname"),
                        React.createElement(react_1.IonInput, { "aria-label": 'lastname', value: user === null || user === void 0 ? void 0 : user.lastname })),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Gender"),
                        React.createElement(react_1.IonInput, { "aria-label": 'gender', value: user === null || user === void 0 ? void 0 : user.gender })),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Date of Birth"),
                        React.createElement(react_1.IonInput, { "aria-label": 'birthday', value: user === null || user === void 0 ? void 0 : user.birthday })),
                    React.createElement(react_1.IonItem, null,
                        React.createElement(react_1.IonLabel, { position: 'stacked' }, "Interest"),
                        React.createElement(react_1.IonInput, { "aria-label": 'interest', value: user === null || user === void 0 ? void 0 : user.interest.join(", ") })))))));
};
exports["default"] = Profile;

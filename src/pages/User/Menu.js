"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./User.scss");
var avatar_jpeg_1 = require("../../assets/avatar.jpeg");
var icons_1 = require("ionicons/icons");
var react_2 = require("react");
var react_router_1 = require("react-router");
var uuid_1 = require("uuid");
var UserDataContext_1 = require("../../context/UserDataContext");
var Menu = function () {
    var history = react_router_1.useHistory();
    var match = react_router_1.useRouteMatch();
    var _a = react_2.useState(), user = _a[0], setUser = _a[1];
    var userData = react_2.useContext(UserDataContext_1.UserDataContext).userData;
    react_2.useEffect(function () {
        setUser(userData);
    });
    react_2.useEffect(function () {
        var menu = document.querySelector("ion-menu");
        var closeMenu = function () {
            menu.close();
        };
        history.listen(function () {
            closeMenu();
        });
    }, [history]);
    var linkArr = [
        { icon: icons_1.documentText, name: "My Information", link: "/profile" },
        { icon: icons_1.chatbubbles, name: "Chats", link: '/chats' },
        { icon: icons_1.people, name: "People", link: "/people" },
        { icon: icons_1.settings, name: "Settings", link: "/settings" },
        { icon: icons_1.informationCircle, name: "About", divider: true, link: "/about" },
    ];
    var linkTo = function (link) {
        history.push(link);
    };
    var buttons = linkArr.map(function (i) {
        return (React.createElement(React.Fragment, null,
            i.divider && React.createElement(react_1.IonItemDivider, { className: 'separator' }),
            React.createElement(react_1.IonItem, { button: true, key: uuid_1.v4(), detail: true, lines: 'none', onClick: function () { return linkTo(i.link === "/about" ? i.link : "" + match.url + i.link); } },
                React.createElement(react_1.IonIcon, { icon: i.icon, slot: 'start' }),
                React.createElement(react_1.IonLabel, null, i.name))));
    });
    return (React.createElement(react_1.IonMenu, { contentId: "main-content" },
        React.createElement(react_1.IonContent, null,
            React.createElement("div", { className: "menu column" },
                React.createElement("span", { className: 'cont-one ion-padding' },
                    React.createElement(react_1.IonAvatar, { slot: 'start' },
                        React.createElement(react_1.IonImg, { src: avatar_jpeg_1["default"], alt: '' }),
                        React.createElement("span", { className: 'status' })),
                    React.createElement("span", null,
                        React.createElement("h6", null, (user === null || user === void 0 ? void 0 : user.firstname) + ' ' + (user === null || user === void 0 ? void 0 : user.lastname)),
                        React.createElement("p", null,
                            "ID: ", user === null || user === void 0 ? void 0 :
                            user.userId))),
                buttons))));
};
exports["default"] = Menu;

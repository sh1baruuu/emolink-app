"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var RoomContext_1 = require("../../context/RoomContext");
var VideoPlayer_1 = require("../../components/VideoPlayer");
require("./Meet.scss");
var Room = function () {
    var id = react_router_dom_1.useParams().id;
    var _a = react_2.useContext(RoomContext_1.RoomContext), ws = _a.ws, me = _a.me, stream = _a.stream, peers = _a.peers;
    react_2.useEffect(function () {
        if (me) {
            ws.emit('join-room', { roomId: id, peerId: me });
        }
    }, [id, me, ws]);
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("h1", null,
                "Room",
                id),
            React.createElement("div", { className: "videoContainer" },
                React.createElement(VideoPlayer_1["default"], { stream: stream }),
                Object.values(peers).map(function (peer) { return (React.createElement(VideoPlayer_1["default"], { stream: peer.stream })); })))));
};
exports["default"] = Room;

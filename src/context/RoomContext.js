"use strict";
exports.__esModule = true;
exports.RoomProvider = exports.RoomContext = void 0;
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
var router_1 = require("../utils/router");
var peerjs_1 = require("peerjs");
var uuid_1 = require("uuid");
var peerActions_1 = require("./peerActions");
var peerReducer_1 = require("./peerReducer");
var URL = '';
exports.RoomContext = react_1.createContext(null);
var ws = socket_io_client_1["default"](URL);
exports.RoomProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(), me = _b[0], setMe = _b[1];
    var _c = react_1.useState(), stream = _c[0], setStream = _c[1];
    var _d = react_1.useReducer(peerReducer_1.peersReducer, {}), peers = _d[0], dispatch = _d[1];
    var getUsers = function (_a) {
        var participants = _a.participants;
        console.log({ participants: participants });
    };
    var enterRoom = function (_a) {
        var roomId = _a.roomId;
        console.log({ roomId: roomId });
        router_1.useNavigate("/room/" + roomId);
    };
    var removePeer = function (peerId) {
        dispatch(peerActions_1.removePeerAction(peerId));
    };
    react_1.useEffect(function () {
        var meId = uuid_1.v4();
        var peer = new peerjs_1["default"](meId);
        setMe(peer);
        try {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (stream) {
                setStream(stream);
            });
        }
        catch (error) {
            console.error(error);
        }
        ws.on('room-created', enterRoom);
        ws.on('get-users', getUsers);
        ws.on('user-disconnected', removePeer);
    }, []);
    react_1.useEffect(function () {
        if (!me)
            return;
        if (!stream)
            return;
        // we initiate call and send own stream
        ws.on("user-joined", function (_a) {
            var peerId = _a.peerId;
            var call = me.call(peerId, stream);
            call.on('stream', function (peerStream) {
                dispatch(peerActions_1.addPeerAction(peerId, peerStream));
            });
        });
        // Answer peer call and send own peer
        me.on('call', function (call) {
            call.answer(stream);
            call.on('stream', function (peerStream) {
                dispatch(peerActions_1.addPeerAction(call.peer, peerStream));
            });
        });
    }, [me, stream]);
    console.log({ peers: peers });
    return (React.createElement(exports.RoomContext.Provider, { value: { ws: ws, me: me, stream: stream, peers: peers } }, children));
};

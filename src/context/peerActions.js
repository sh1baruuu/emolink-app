"use strict";
exports.__esModule = true;
exports.removePeerAction = exports.addPeerAction = exports.REMOVE_PEER = exports.ADD_PEER = void 0;
exports.ADD_PEER = "ADD_PEER";
exports.REMOVE_PEER = "REMOVE_PEER";
exports.addPeerAction = function (peerId, stream) { return ({
    type: exports.ADD_PEER,
    payload: { peerId: peerId, stream: stream }
}); };
exports.removePeerAction = function (peerId) { return ({
    type: exports.REMOVE_PEER,
    payload: { peerId: peerId }
}); };

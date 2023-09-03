"use strict";
exports.__esModule = true;
exports.generateUniqueId = void 0;
exports.generateUniqueId = function () {
    var length = 10;
    var characters = '0123456789';
    var charactersLength = characters.length;
    var uniqueId = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charactersLength);
        uniqueId += characters.charAt(randomIndex);
    }
    return uniqueId;
};

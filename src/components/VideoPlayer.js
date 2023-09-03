"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../pages/Meet/Meet.scss");
var VideoPlayer = function (_a) {
    var stream = _a.stream;
    var videoRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (videoRef.current)
            videoRef.current.srcObject = stream;
    }, [stream]);
    return (React.createElement("video", { ref: videoRef, autoPlay: true, muted: true }));
};
exports["default"] = VideoPlayer;

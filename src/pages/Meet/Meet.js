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
var react_1 = require("react");
var react_2 = require("@ionic/react");
require("./Meet.scss");
var icons_1 = require("ionicons/icons");
var media_1 = require("../../utils/media");
var react_router_1 = require("react-router");
var faceapi = require("face-api.js");
var facedetection_1 = require("../../utils/facedetection");
var Meet = function () {
    var history = react_router_1.useHistory();
    var _a = react_1.useState(true), video = _a[0], setVideo = _a[1];
    var _b = react_1.useState(true), audio = _b[0], setAudio = _b[1];
    var localVideoRef = react_1.useRef(null);
    var remoteVideoRef = react_1.useRef(null);
    var canvasRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var loadModelsAndDetectExpressions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var video, canvas, videoWidth, videoHeight, drawExpressions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, facedetection_1.loadFaceDetectionModels()];
                    case 1:
                        _a.sent();
                        video = localVideoRef.current;
                        canvas = canvasRef.current;
                        if (!video || !canvas)
                            return [2 /*return*/];
                        videoWidth = video.videoWidth, videoHeight = video.videoHeight;
                        canvas.width = videoWidth;
                        canvas.height = videoHeight;
                        drawExpressions = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var detections, displaySize, resizedDetections, context, faceLandmarks, jawline, minX, minY, canvasX, canvasY;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(video.readyState === 4 && !video.paused && !video.ended)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, faceapi
                                                .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                                                .withFaceLandmarks()
                                                .withFaceExpressions()];
                                    case 1:
                                        detections = _a.sent();
                                        displaySize = { width: video.videoWidth, height: video.videoHeight };
                                        resizedDetections = faceapi.resizeResults(detections, displaySize);
                                        if (canvas.width > 0 && canvas.height > 0 && displaySize.width > 0 && displaySize.height > 0) {
                                            context = canvas.getContext('2d');
                                            if (!context)
                                                return [2 /*return*/];
                                            context.clearRect(0, 0, canvas.width, canvas.height);
                                            faceapi.draw.drawDetections(canvas, resizedDetections);
                                            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
                                            // Adjust the position of the canvas based on the detected face landmarks
                                            if (resizedDetections.length > 0) {
                                                faceLandmarks = resizedDetections[0].landmarks;
                                                jawline = faceLandmarks.getJawOutline();
                                                minX = Math.min.apply(Math, jawline.map(function (point) { return point.x; }));
                                                minY = Math.min.apply(Math, jawline.map(function (point) { return point.y; }));
                                                canvasX = minX - 20;
                                                canvasY = minY - 20;
                                                // Update the canvas position
                                                canvas.style.left = canvasX + "px";
                                                canvas.style.top = canvasY + "px";
                                            }
                                        }
                                        _a.label = 2;
                                    case 2:
                                        requestAnimationFrame(drawExpressions);
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        drawExpressions();
                        return [2 /*return*/];
                }
            });
        }); };
        loadModelsAndDetectExpressions();
    }, []);
    react_1.useEffect(function () {
        media_1.openUserMedia(video, audio, localVideoRef, remoteVideoRef);
    }, [video]);
    react_1.useEffect(function () {
        media_1.openUserMedia(video, audio, localVideoRef, remoteVideoRef);
    }, [audio]);
    var toggleCamera = function () {
        setVideo(function (on) { return !on; });
    };
    var toggleAudio = function () {
        setAudio(function (on) { return !on; });
    };
    var endCall = function () {
        var _a;
        var localStream = (_a = localVideoRef.current) === null || _a === void 0 ? void 0 : _a.srcObject;
        if (localStream && localStream.getTracks) {
            var tracks = localStream.getTracks();
            tracks.forEach(function (track) {
                track.stop();
            });
            localVideoRef.current.srcObject = null;
        }
        history.push('/user');
    };
    return (react_1["default"].createElement(react_2.IonPage, null,
        react_1["default"].createElement(react_2.IonContent, { fullscreen: true },
            react_1["default"].createElement("div", { className: "meet-container column" },
                react_1["default"].createElement("canvas", { ref: canvasRef, className: "face-canvas" }),
                react_1["default"].createElement("video", { id: "localVideo", muted: true, autoPlay: true, playsInline: true, ref: localVideoRef }),
                react_1["default"].createElement("video", { id: "remoteVideo", height: "800", width: "500", autoPlay: true, playsInline: true, ref: remoteVideoRef }),
                react_1["default"].createElement("div", { className: "buttons" },
                    react_1["default"].createElement(react_2.IonButton, { fill: 'outline', color: 'light', onClick: toggleCamera },
                        react_1["default"].createElement(react_2.IonIcon, { icon: video ? icons_1.videocam : icons_1.videocamOff })),
                    react_1["default"].createElement(react_2.IonButton, { color: 'danger', onClick: endCall },
                        react_1["default"].createElement(react_2.IonIcon, { icon: icons_1.call })),
                    react_1["default"].createElement(react_2.IonButton, { fill: 'outline', color: 'light', onClick: toggleAudio },
                        react_1["default"].createElement(react_2.IonIcon, { icon: audio ? icons_1.mic : icons_1.micOff })))))));
};
exports["default"] = Meet;

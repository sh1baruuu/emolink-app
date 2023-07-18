import React, { useRef, useState, useEffect } from 'react'
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react'
import './Meet.scss'
import { call, mic, micOff, videocam, videocamOff } from 'ionicons/icons'
import { openUserMedia } from '../../utils/media'
import { useHistory } from 'react-router'
import * as faceapi from 'face-api.js';


const Meet: React.FC = () => {

    const history = useHistory()

    const [video, setVideo] = useState<boolean>(true)
    const [audio, setAudio] = useState<boolean>(true)
    const localVideoRef = useRef<HTMLVideoElement>(null)
    const remoteVideoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const loadModelsAndDetectExpressions = async () => {
        const video = localVideoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);

        const drawExpressions = async () => {
        if (video.readyState === 4 && !video.paused && !video.ended) {
            const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

            const displaySize = { width: video.videoWidth, height: video.videoHeight };
            const resizedDetections = faceapi.resizeResults(detections, displaySize);

            if (canvas.width > 0 && canvas.height > 0 && displaySize.width > 0 && displaySize.height > 0) {
            const context = canvas.getContext('2d');

            if (!context) return;

            context.clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

            // Adjust the position of the canvas based on the detected face landmarks
            if (resizedDetections.length > 0) {
                const faceLandmarks = resizedDetections[0].landmarks;
                const jawline = faceLandmarks.getJawOutline();
                const minX = Math.min(...jawline.map((point) => point.x));
                const minY = Math.min(...jawline.map((point) => point.y));
                const canvasX = minX - 20; // Adjust the X position as needed
                const canvasY = minY - 20; // Adjust the Y position as needed

                // Update the canvas position
                canvas.style.left = `${canvasX}px`;
                canvas.style.top = `${canvasY}px`;
            }
            }
        }

        requestAnimationFrame(drawExpressions);
        };

        drawExpressions();
    };

    loadModelsAndDetectExpressions();
    }, [])

    useEffect(() => {
        openUserMedia(video, audio, localVideoRef, remoteVideoRef)
    }, [video])

    useEffect(() => {
        openUserMedia(video, audio, localVideoRef, remoteVideoRef)
    }, [audio])

    const toggleCamera = () => {
        setVideo((on: boolean) => !on)
    }

    const toggleAudio = () => {
        setAudio((on: boolean) => !on)
    }

    const endCall =  () => {
        const localStream = localVideoRef.current?.srcObject as MediaStream;

        if (localStream && localStream.getTracks) {
            const tracks = localStream.getTracks();
            tracks.forEach((track) => {
                track.stop()
            });
        
        localVideoRef.current!.srcObject = null;
        }
        history.push('/user')
    }

    return (
        <IonPage>
        <IonContent fullscreen>
            <div className="meet-container column">
            <video id="localVideo" muted autoPlay playsInline ref={localVideoRef}></video>
            <video id="remoteVideo" height="800" width="500" autoPlay playsInline ref={remoteVideoRef}></video>
            <canvas ref={canvasRef} className="face-canvas"></canvas>
            <div className="buttons">
                <IonButton fill='outline' color='light' onClick={toggleCamera}>
                    <IonIcon icon={ video ? videocam : videocamOff } ></IonIcon>
                </IonButton>
                <IonButton color='danger' onClick={endCall} >
                    <IonIcon  icon={ call } ></IonIcon>
                </IonButton>
                <IonButton  fill='outline' color='light' onClick={toggleAudio}>
                    <IonIcon icon={ audio ? mic : micOff } ></IonIcon>
                </IonButton>
            </div>
            </div>
        </IonContent>
        </IonPage>
    )
}

export default Meet

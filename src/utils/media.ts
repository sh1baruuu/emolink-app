import { useRef } from "react";

export const openUserMedia = async (video: boolean, audio: boolean, localVideoRef: any, remoteVideoRef: any) => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('getUserMedia is not supported on this browser');
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: video, audio: audio });

        if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.play();
        }

        if (remoteVideoRef.current) {
        const remoteStream = new MediaStream();
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
        }
    } catch (error) {
        console.log('Error accessing media devices:', error);
    }
}

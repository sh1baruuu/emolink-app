import React, { useRef, useState, useEffect } from 'react'
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react'
import './Meet.scss'
import { call, mic, micOff, videocam, videocamOff } from 'ionicons/icons'
import { openUserMedia } from '../../utils/media'
import socketIO from 'socket.io-client'

const URL = 'http://localhost:3000'

const Meet: React.FC = () => {

    useEffect(() => {
        socketIO(URL)
    }, [])

    const [video, setVideo] = useState<boolean>(true)
    const [audio, setAudio] = useState<boolean>(true)
    const localVideoRef = useRef<HTMLVideoElement>(null)
    const remoteVideoRef = useRef<HTMLVideoElement>(null)
    


    // useEffect(() => {
    //     openUserMedia(video, audio, localVideoRef, remoteVideoRef)
    // }, [video])

    // useEffect(() => {
    //     openUserMedia(video, audio, localVideoRef, remoteVideoRef)
    // }, [audio])

    const toggleCamera = () => {
        setVideo((on: boolean) => !on)
    }

    const toggleAudio = () => {
        setAudio((on: boolean) => !on)
    }

    return (
        <IonPage>
        <IonContent fullscreen>
            <div className="meet-container column">
            <video id="localVideo" muted autoPlay playsInline ref={localVideoRef}></video>
            <video id="remoteVideo" height="800" width="500" autoPlay playsInline ref={remoteVideoRef}></video>
            <div className="buttons">
                <IonButton fill='outline' color='light' onClick={toggleCamera}>
                    <IonIcon icon={ video ? videocam : videocamOff } ></IonIcon>
                </IonButton>
                <IonButton color='danger' onClick={toggleCamera}>
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

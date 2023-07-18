import { IonPage, IonContent } from "@ionic/react"
import { useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { RoomContext } from "../../context/RoomContext"
import VideoPlayer from "../../components/VideoPlayer"
import { PeerState } from "../../context/peerReducer"
import './Meet.scss'

const Room: React.FC = () => {

    const {id} = useParams<{id: any}>()
    const {ws, me, stream, peers} = useContext(RoomContext)

    useEffect(() => {
        if (me) {
            ws.emit('join-room', { roomId: id, peerId: me });
        }
    }, [id, me, ws]);
    


    return (
        <IonPage>
            <IonContent fullscreen>
                <h1>Room{id}</h1>
                <div className="videoContainer">
                    <VideoPlayer stream={stream}  />

                    {Object.values(peers as PeerState).map((peer) => (
                        <VideoPlayer stream={peer.stream} />
                        ))}
                    
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Room
import { IonPage, IonContent } from "@ionic/react"
import { useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { RoomContext } from "../../context/RoomContext"
import VideoPlayer from "../../components/VideoPlayer"

const Room: React.FC = () => {

    const {id} = useParams<{id: any}>()
    const {ws, me, stream} = useContext(RoomContext)

    useEffect(()=>{
        if (me){ ws.emit('join-room', {roomId: id, peerId: me._id})}

    }, [id, me, ws])



    return (
        <IonPage>
            <IonContent fullscreen>
                <h1>Room {id}</h1>
                <div>
                    <VideoPlayer stream={stream}  />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Room
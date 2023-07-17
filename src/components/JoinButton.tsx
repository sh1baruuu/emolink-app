import { IonButton } from "@ionic/react"
import { useContext } from "react"
import { RoomContext } from "../context/RoomContext"

const JoinButton: React.FC = () => {
    const {ws} = useContext(RoomContext)
    const joinRoom = () => {
        ws.emit('create-room')
    }

    return (
        <IonButton onClick={joinRoom} >Join Room</IonButton>
    )
}

export default JoinButton
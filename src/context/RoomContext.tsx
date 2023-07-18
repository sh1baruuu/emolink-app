import { ReactNode, createContext, useEffect, useState, useReducer } from 'react'
import socketIOClient from 'socket.io-client'
import { useNavigate } from '../utils/router'
import Peer from 'peerjs'
import { v4 as uuid } from 'uuid'
import { addPeerAction, removePeerAction } from './peerActions'
import { peersReducer } from './peerReducer'

const URL = ''

export const RoomContext = createContext<null | any>(null)

const ws = socketIOClient(URL)

export const RoomProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [me, setMe] = useState<Peer>()
    const [stream, setStream] = useState<MediaStream>()
    const [peers, dispatch] = useReducer(peersReducer, {})

    const getUsers = ({participants}:{participants: string[]}) => {
        console.log({participants})
    }

    const enterRoom = ({ roomId }:{roomId: any}) => {
        console.log({roomId})
        useNavigate(`/room/${roomId}`)
    }

    const removePeer = (peerId: string) => {
        dispatch(removePeerAction(peerId))
    }

    useEffect(()=> {
        const meId = uuid()
        const peer = new Peer(meId)
        setMe(peer)

        try { 
            navigator.mediaDevices.getUserMedia({video: true, audio: false}).then( (stream) => {
                setStream(stream)
            })
        } catch (error) {
            console.error(error)
        }

        ws.on('room-created', enterRoom)
        ws.on('get-users', getUsers)
        ws.on('user-disconnected', removePeer)
    }, [])

    useEffect( () => { 
        if (!me) return;
        if (!stream) return;

        // we initiate call and send own stream
        ws.on("user-joined", ({peerId}) => {
            const call = me.call(peerId, stream)
            call.on('stream', (peerStream) => {
                dispatch(addPeerAction(peerId, peerStream))
            })
        })

        // Answer peer call and send own peer
        me.on('call', (call) => {
            call.answer(stream)
            call.on('stream', (peerStream) => {
                dispatch(addPeerAction(call.peer, peerStream))
            })
        })
    }, [me, stream])
    
    console.log({peers})

    return (
        <RoomContext.Provider value={{ ws, me, stream, peers}}>
            {children}
        </RoomContext.Provider>
    ) 
}
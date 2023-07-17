import { useEffect, useRef } from "react"
import '../pages/Meet/Meet.scss'

const VideoPlayer: React.FC<{stream: MediaStream}> = ({stream}) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if(videoRef.current) videoRef.current.srcObject = stream
    }, [stream])


    return (
        <video ref={videoRef} autoPlay muted={true}></video>
    )
}

export default VideoPlayer
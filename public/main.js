const socket = io('/')
// const myPeer = new Peer({
//     config: {'iceServers': [

//             { url:  'stun:stun1.l.google.com:19302'},
//             { url:'stun:stun2.l.google.com:19302'},
//             ]
//         }
//     })

    const myPeer = new Peer(undefined, {
        host: '/',
        port: '3001'
    })

const videogrid = document.querySelector('#video-grid')

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

const myVideo = document.createElement('video')
myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then( stream  => {
    addVideoStream(myVideo, stream)
    myPeer.on('call', call => {
        call.answer(stream)
    })

    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
    })
})


socket.emit('join-room', ROOM_ID, 10)


socket.on('user-connected', userId => {
    console.log('User connected ' + userId)
})

const connectToNewUser = (userId, stream) => {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(userVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })
}


const addVideoStream = (video, stream) => {
    video.srcObject = stream
    video.addEventListener('loadmetadata', () => {
        video.play()
    })
    videogrid.append(video)
}
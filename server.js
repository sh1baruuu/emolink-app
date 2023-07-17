import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors'

const port = 3000;
const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server,{ cors :{
    origin: '*',
    methods: ['GET', 'POST']
    }
});



io.on('connection', (socket) => {
    console.log("user connected")

    socket.on('join-room', () => {
        console.log(`User ${socket.id} joined a new room`)
    })

    socket.on('disconnect', () => {
        console.log("user disconnected")
    })
})


server.listen(port, ()=> {
    console.log("Listening to the server on port " + port)
})
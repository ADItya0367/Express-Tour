const express = require('express');
const app = express();

const {createServer} = require('http');
const {server} = require('socket.io');

const httpServer = createServer(app);
const io = new Server(httpServer);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log('message: ' + msg)
    });
});

app.listen(3000, () => {
    console.log('listening on *:3000');
});
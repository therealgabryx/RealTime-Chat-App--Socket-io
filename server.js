const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(4000, () => {
    console.log('\nServer working on http://localhost:4000\n')
})

// static files
app.use(express.static('public'))

// Socket setup 
const io = socket(server) 

io.on('connection', (socket) => {
    console.log('Socket connection established', socket.id) 

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data) 
    })
}) 
// Make connection 
var socket = io.connect('http://localhost:4000') 

// Query DOM 

var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')

// Emit Events 
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
}) 

// Listen for events 
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})

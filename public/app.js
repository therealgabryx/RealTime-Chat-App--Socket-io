// Make connection 
var socket = io.connect('http://localhost:4000') 

// Query DOM 

var message = document.getElementById('message')
var feedback = document.getElementById('feedback')
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

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})

// Listen for events 
socket.on('chat', (data) => { 
    feedback.innerHTML = ''
    feedback.value = ''
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
}) 

socket.on('typing', (data) => {
    feedback.innerHTML =  '<p><em>' + data + ' is typing a message..</em></p>'
}) 

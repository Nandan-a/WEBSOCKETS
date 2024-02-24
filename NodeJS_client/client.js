// Program to create a websocket client
const {WebSocket} = require('ws');

const HOST = "ws://localhost:";
const PORT = "3000";
const PATH = "/aao/gappe/maare";
const ws = new WebSocket(HOST + PORT + PATH);

// Event to handle intial Connection event 
ws.on('open', function open() {
  ws.send('Hello from Nodejs websocket client');
  ws.ping();
});

ws.on('message', function message(data) {
  if((data)==null){
    console.log('received: %s', data);
  }
  else{
    
    console.log('Typing data...');
  }
});

ws.on('close',(statusCode, reasonbuffer)=>{
    console.log(statusCode+ reasonbuffer)
})
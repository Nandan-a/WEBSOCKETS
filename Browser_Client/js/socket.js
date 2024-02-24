
var logs = document.getElementById("msgLogs");
var messages = document.getElementById("messages");
var statusMessage = document.getElementById("typingStatus");

connect();

var data = "";
var socket;
var timer;
function connect() {
    const HOST = "ws://localhost:";
    const PORT = "3000";
    const PATH = "/aao/gappe/maare";

    var ws = new WebSocket(HOST + PORT + PATH);
    ws.onopen = function(){
        alert("Connected to server");
        socket = ws;
    }

    ws.onmessage = function(message){
        if(message.data!="_"){
            console.log(message.data);
            data +=  message.data+ "\n";
            logs.innerHTML = data
        } else {
            statusMessage.innerHTML = "<italic>User is typing...</italic>";
            if(timer!=null){
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                statusMessage.innerHTML="";
            },1000);
        }
    }
}

function send(){
    data += "Me: "+ messages.value+ "\n";
    logs.innerHTML = data
    socket.send(messages.value)
    messages.value = "";
}

function userTyping(){
    if(socket!=null){
        socket.send("_")
    }
}

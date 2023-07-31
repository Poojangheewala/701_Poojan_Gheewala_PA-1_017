const http = require('http');
const st = require('node-static');
const chatBot = require('./chatbot'); // Import chatbot.js module
const WebSocket = require('ws');

const file = new st.Server('./Pages/q4.html');

const server = http.createServer((req, res) => {
  req.on('end', () => {
    file.serve(req, res);
  }).resume();
});

server.listen(4589, () => {
  console.log("Server listening on 4589");
});

const wss = new WebSocket.Server({ server: server });

wss.on('connection', (ws) => {
  ws.send("Hii, I am a chat bot!!");

  ws.on('message', (data) => {
    const message = data.toString();
    const reply = chatBot.chatReply(message);
    ws.send(reply);
  });
});
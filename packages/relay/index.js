import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const port = 3000

// Set up a headless websocket server that prints any
// events that come in.
const wsServer = new WebSocketServer({ noServer: true })
wsServer.on('connection', (socket) => {
  socket.on('message', (message) => console.log(message))
})

app.get('/', (req, res) => {
  res.send(`Hello World!
    <script>
      // Create WebSocket connection.
      const socket = new WebSocket('ws://localhost:3000');

      // Connection opened
      socket.addEventListener('open', function (event) {
          socket.send('Hello Server!');
      });

      // Listen for messages
      socket.addEventListener('message', function (event) {
          console.log('Message from server ', event.data);
      });
    </script>
  `)
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// `server` is a vanilla Node.js HTTP server, so use
// the same ws upgrade process described here:
// https://www.npmjs.com/package/ws#multiple-servers-sharing-a-single-https-server
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit('connection', socket, request)
  })
})

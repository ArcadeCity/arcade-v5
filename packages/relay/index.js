import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const port = 3000

// Set up a headless websocket server that prints any events that come in.
const wsServer = new WebSocketServer({ noServer: true })
wsServer.on('connection', (socket) => {
  socket.on('message', (message) => console.log(message))
})

app.get('/', (req, res) => {
  res.send('Arcade Relay')
})

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit('connection', socket, request)
  })
})

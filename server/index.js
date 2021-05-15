const express =require('express');
const socketio = require('socket.io');
const http =require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connecton', (socket) => {
  console.log('新たな接続をします');

  socket.on('disconnect', () => {
    console.log('User has left(ユーザーが退出しました)')
  })
})

app.use(router);

server.listen(PORT, () => console.log(` ${PORT}番でサーバーが起動しています`));
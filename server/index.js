const express = require('express');
const router = require('./router');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);
const {addUSer,removeUser,getUser,getUserInRoom} = require('./user');
server.listen(PORT, () =>{
    console.log(`server is start on port ${PORT}`)
})
io.on('connection',(socket) =>{
    socket.on('join', ({name, room},callback) =>{
        const {error,user} = addUSer({id:socket.id, name,room});
        if(error){
                return callback(error);
        }
        socket.emit('message', {user:'admin', text: `welcome to the this room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text: `${user.name}, has joined!`});
        socket.join(user.room);
        io.to(user.room).emit('roomData',{room:user.room,users:getUserInRoom(user.room)});
        console.log('user has join ' + name);

    });
    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text:message});
        io.to(user.room).emit('roomData',{room:user.room,users:getUserInRoom(user.room)});

        callback()
    })

    socket.on('disconnect', (socket) =>{
        const user = removeUser(socket.id)
        if(user){

            io.to(user.room).emit('message',{user:'admin', text: `user ${user.name} has left`})
        }
        console.log('user has left');
      

    })
})
app.use(router);

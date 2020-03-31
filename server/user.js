const users = [];
const addUSer= ({id, name, room}) =>{
   name = name.trim().toLowerCase();
   room = room.trim().toLowerCase();
   const  check = users.find(value => value.name === name && value.room === room)
   if(check){
       return {error: 'user is taken'}
   }
   const user = {id,name,room};
   users.push(user);
   return {user};

}
const removeUser= (id) =>{
const index = users.findIndex(value => value.id === id);
if(index !== -1){
    return users.splice(index, 1)[0];
}



}
const getUser= (id) =>{ 
return users.find(user => user.id === id);

}
const getUserInRoom= (room) =>{
    return users.filter(user => user.room === room)
}
module.exports = {addUSer,removeUser,getUser,getUserInRoom}
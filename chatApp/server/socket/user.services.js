
const users = []

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  rooom = room.trim().toLowerCase()

  const existingUser = users.find((user) => user.room === room && user.name === name)

  if (existingUser) {
    return { error: "username is taken" }
  }
  const user = { id, name, room };
  users.push(user);
  console.log(users)
  return { user }
}
const removeUser = (id) => {

  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    console.log(`${users[index].name} has left`)

    return users.splice(index, 1)[0];
  }
}
const getUser = (id) => {
  return users.find((user) => user.id === id)
}
const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room)
}
module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
const Boards = require('../websocket/boards')
const GroupTasks = require('../websocket/group_tasks')
const Tasks = require('../websocket/tasks')

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on('boards.getAll', async () => {
      const boards = new Boards();

      socket.emit('boards.getAll', await boards.getAll())
    })

    socket.on('group_tasks.getAll', async () => {
      const groupTasks = new GroupTasks();

      socket.emit('group_tasks.getAll', await groupTasks.getAll())
    })

    socket.on('tasks.getPerGroup', async (group_id) => {
      const tasks = new Tasks();

      socket.emit('tasks.getPerGroup', await tasks.getPerGroup(group_id))
    })
  });
}
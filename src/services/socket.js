const Boards = require('../controllers/boards')
const GroupTasks = require('../controllers/group_tasks')
const Tasks = require('../controllers/tasks')

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on('boards/', async () => {
      const boards = new Boards();

      socket.emit('boards/', await boards.getAll())
    })

    socket.on('boards/group_tasks/', async () => {
      const groupTasks = new GroupTasks();

      socket.emit('boards/group_tasks/', await groupTasks.getAll())
    })

    socket.on('boards/group_tasks/tasks/', async (payload) => {
      const tasks = new Tasks();

      if (payload.method === 'GET') {
        socket.emit(`boards/group_tasks/tasks/${payload.group_id}`, await tasks.getPerGroup(payload.group_id))
      }
    })

    socket.on('tasks_statuses/', async (payload) => {
      const tasks = new Tasks();

      if (payload.method === 'GET') {
        socket.emit(`tasks_statuses/`, await tasks.getPerGroup(payload.group_id))
      }
    })
  });
}
const TasksController = require('../controllers/tasks')

const routes = {
  getAll: async (req, res) => TasksController.getAllHTTP(req, res),
  getPerGroupId: async (req, res) => TasksController.getPerGroupHTTP(req, res),

}

module.exports = routes;
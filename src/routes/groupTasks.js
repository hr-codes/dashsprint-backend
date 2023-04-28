const groupTasksController = require('../controllers/group_tasks')

const routes = {
  getAll: async (req, res) => groupTasksController.getAllHTTP(req, res),
}

module.exports = routes;
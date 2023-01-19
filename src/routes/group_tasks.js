const groupsTasksController = require('../controllers/group_tasks');

const routes = {
  post: async (req, res) => groupsTasksController.post(req, res),
  patch: async (req, res) => groupsTasksController.patch(req, res),
  getAll: async (req, res) => groupsTasksController.getAll(req, res),
  get: async (req, res) => groupsTasksController.get(req, res),
  delete: async (req, res) => groupsTasksController.delete(req, res)
}

module.exports = routes;

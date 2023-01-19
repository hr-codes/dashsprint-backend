const tasksController = require('../controllers/tasks');

const routes = {
  post: async (req, res) => tasksController.post(req, res),
  patch: async (req, res) => tasksController.patch(req, res),
  getAll: async (req, res) => tasksController.getAll(req, res),
  get: async (req, res) => tasksController.get(req, res),
  delete: async (req, res) => tasksController.delete(req, res)
}

module.exports = routes;

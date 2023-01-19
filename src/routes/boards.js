const boardsController = require('../controllers/boards');

const routes = {
  post: async (req, res) => boardsController.post(req, res),
  patch: async (req, res) => boardsController.patch(req, res),
  getAll: async (req, res) => boardsController.getAll(req, res),
  get: async (req, res) => boardsController.get(req, res),
  delete: async (req, res) => boardsController.delete(req, res)
}

module.exports = routes;

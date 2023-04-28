const boardsController = require('../controllers/boards')

const routes = {
  getAll: async (req, res) => boardsController.getAllHTTP(req, res),
}

module.exports = routes;
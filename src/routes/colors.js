const colorsController = require('../controllers/colors')

const routes = {
  getAll: async (req, res) => colorsController.getAll(req, res),
}

module.exports = routes;
const taskStatusesController = require('../controllers/task_statuses')

// console.log('DASDSADASDASDAS DASDASD ', taskStatusesController.getAll())

const routes = {
  post: async (req, res) => taskStatusesController.post(req, res),
  patch: async (req, res) => taskStatusesController.patch(req, res),
  getAll: async (req, res) => taskStatusesController.getAll(req, res),
  get: async (req, res) => taskStatusesController.get(req, res),
  delete: async (req, res) => taskStatusesController.delete(req, res)
}

module.exports = routes;
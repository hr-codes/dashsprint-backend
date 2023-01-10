const authController = require('../controllers/auth');

const routes = {
  signIn: async (req, res) => authController.signIn(req, res),
  logout: async (req, res) => authController.logout(req, res)
}

module.exports = routes;
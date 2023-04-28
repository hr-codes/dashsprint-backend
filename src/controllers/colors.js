const Models = require('../models/index')

const ColorsController = {
  getAll: async (req, res) => {
    const data = await Models.Colors.findAll();

    return res.status(200).json(data)
  },
}

module.exports = ColorsController
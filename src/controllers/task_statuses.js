const Models = require('../models/index')

const TaskStatusesController = {
  getAll: async (req, res) => {
    const data = await Models.TaskStatus.findAll();

    return res.status(200).json(data)
  },

  post: async (req, res) => {
    console.log(res)

    const { name, color } = req.body;

    if (!name) {
      return res.status(400).json({
        message: 'Please fill the name of status',
      })
    }

    if (!color) {
      return res.status(400).json({
        message: 'Please fill the color name of status',
      })
    }

    try {
      const data = await Models.TaskStatus.create({
        name: name,
        color: color,
      });

      return res.status(200).json({
        data: data,
        message: 'saved successfully'
      })
    } catch (err) {
      return res.status(400).json({
        message: err
      })
    }
  }
}

module.exports = TaskStatusesController
const Models = require('../models/index')

const tasksController = {
  post: async (req, res) => {
    const { name, isActive, groupTaskId, status } = req.body;

    console.log('======val', req.body.groupTaskId)

    console.log(groupTaskId)

    try {
      const data = await Models.Task.create({
        name: name,
        isActive: isActive ?? true,
        status: status ?? null,
        groupTaskId: groupTaskId,
        timeTracking: null,
        priority: null,
      });

      return res.status(200).json({
        data: data,
        message: 'saved successfully'
      })
    } catch(err) {
      return res.status(400).json({
        message: err
      })
    }
  },
  patch: async (req, res) => {

  },
  getAll: async (req, res) => {
    const data = await Models.Task.findAll();

    if (!data) {
      return res.status(200).json({
        data: [],
        message: `${data.length} tasks founded`,
      });
    }

    return res.status(200).json({
      data,
      message: `${data.length} tasks founded`,
    });
  },
  get: async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({
        data: {},
        message: `${id} is not a number`,
      });
    }

    const result = await Models.Task.findByPk(id);

    if (!result) {
      return res.status(200).json({
        data: {},
        message: '0 group founded',
      });
    }

    return res.status(200).json({
      data: result,
      message: `${result.length} tasks founded`,
    });
  },
  delete: async (req, res) => {

  }
}

module.exports = tasksController;
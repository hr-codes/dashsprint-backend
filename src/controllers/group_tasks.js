const Models = require('../models/index')

const groupsTasksController = {
  post: async (req, res) => {
    const { name, color, boardId, status } = req.body;

    try {
      const data = await Models.GroupTask.create({
        name: name,
        status: status ?? 1,
        color: color,
        boardId: boardId
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
    const data = await Models.GroupTask.findAll();

    if (!data) {
      return res.status(200).json({
        data: [],
        message: `${data.length} groups tasks founded`,
      });
    }

    return res.status(200).json({
      data,
      message: `${data.length} groups tasks founded`,
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

    const result = await Models.GroupTask.findByPk(id);

    if (!result) {
      return res.status(200).json({
        data: {},
        message: '0 group founded',
      });
    }

    return res.status(200).json({
      data: result,
      message: `${result.length} groups tasks founded`,
    });
  },
  delete: async (req, res) => {

  }
}

module.exports = groupsTasksController;
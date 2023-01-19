const Models = require('../models/index')

const boardsController = {
  post: async (req, res) => {
    const { name, status } = req.body;

    try {
      const data = await Models.Board.create({
        name: name,
        status: status ?? 1
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
    const data = await Models.Board.findAll();

    if (!data) {
      return res.status(200).json({
        data: [],
        message: `${data.length} boards founded`,
      });
    }

    return res.status(200).json({
      data,
      message: `${data.length} boards founded`,
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

    const result = await Models.Board.findByPk(id);

    if (!result) {
      return res.status(200).json({
        data: {},
        message: '0 board founded',
      });
    }

    return res.status(200).json({
      data: result,
      message: `${result.length} boards founded`,
    });
  },
  delete: async (req, res) => {

  }
}

module.exports = boardsController;
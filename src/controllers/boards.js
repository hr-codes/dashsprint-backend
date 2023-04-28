const Models = require('../models/index')

const BoardsController = {
  getAllHTTP: async (req, res) => {
    try {
      const data = await Models.Board.findAll();

      return res.status(200).json({
        data: data,
      });
    } catch (err) {
      return res.status(400).json({
        message: err
      })
    }

  },
  getAllWS: async () => {
    const data = await Models.Board.findAll();

    return data;
  },
}

module.exports = BoardsController
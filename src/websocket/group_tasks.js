const Models = require('../models/index')

module.exports = class BoardsWs {
  constructor() {

  }

  async get(request) {
    const { id } = request;

    if (isNaN(id)) {
      return res.status(400).json({
        data: {},
        message: `${id} is not a number`,
      });
    }

    const data = await Models.GroupTask.findByPk(id);

    return data;
  }

  async getAll() {
    const data = await Models.GroupTask.findAll();

    return data;
  }

  async post(request) {
    const { name, status } = request;

    try {
      const data = await Models.GroupTask.create({
        name: name,
        status: status ?? 1,
        color: color,
        boardId: boardId
      });

      // return res.status(200).json({
      //   data: data,
      //   message: 'saved successfully'
      // })
    } catch (err) {
      // return res.status(400).json({
      //   message: err
      // })
    }
  }

  patch () {

  }
}


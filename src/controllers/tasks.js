const Models = require('../models/index')

const TasksController = {
  getAllHTTP: async (req, res) => {
    const group_id = res.query.group_id;

    console.log('TEM QUERY', group_id)

    try {
      let data;

      if (group_id) {
        data = await Models.GroupTask.findAll({ where: { groupTaskId: group_id } })
      } else {
        data = await Models.GroupTask.findAll();
      }

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
    const data = await Models.GroupTask.findAll();

    return data;
  },
  getPerGroupWS: async (group_id) => {
    const data = await Models.Task.findAll({ where: { groupTaskId: group_id } })

    return data;
  }
}

module.exports = TasksController


module.exports = class BoardsController {
  constructor() {}

  async get(request) {
    const { id } = request;

    if (isNaN(id)) {
      return res.status(400).json({
        data: {},
        message: `${id} is not a number`,
      });
    }

    const data = await Models.Task.findByPk(id);

    return data;
  }

  async getAll() {
    const data = await Models.Task.findAll();

    return data;
  }

  async getPerGroup(group_id) {
    const data = await Models.Task.findAll({ where: { groupTaskId: group_id } })

    return data;
  }

  async post(request) {
    const { name, status } = request;

    try {
      const data = await Models.Task.create({
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


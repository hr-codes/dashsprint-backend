const Models = require('../models/index')

const GroupTasksController = {
  getAllHTTP: async (req, res) => {
    try {
      const data = await Models.GroupTask.findAll();

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
}

module.exports = GroupTasksController

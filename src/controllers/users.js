const Models = require('../models/index')
const CryptoJS = require("crypto-js");

const usersController = {
  post: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName && !lastName && !email && !password) {
      res.status(400).json({ message: 'required fields not passed.' })

      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      data.password = CryptoJS.AES.encrypt(data.password, process.env.APP_SECRET).toString();

      const user = await Models.User.create(data);

      res.status(201).json({
        data: {
          id: user.id,
        },
        message: 'User created successfully.'
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  patch: async (req, res) => {
    return res.status(200).json({
      data: {},
      message: 'user was deleted',
    });
  },
  getAll: async (req, res) => {
    return res.status(200).json({
      data: await Models.User.findAll(),
      message: 'Users founded',
    });
  },
  get: async (req, res) => {
    return res.status(200).json({
      data: {},
      message: 'user was deleted',
    });
  },
  delete: async (req, res) => {
    return res.status(200).json({
      data: {},
      message: 'user was deleted',
    });
  }
}

module.exports = usersController;
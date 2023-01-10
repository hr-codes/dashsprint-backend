const Models = require('../models/index')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


const authController = {
  signIn: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Models.User.findOne({ where: { email: email } })

      if (!user) {
        res.status(422).json({
          data: {},
          message: 'user not found',
        });

        return
      }

      const dbPassword = CryptoJS.AES.decrypt(user.password, process.env.APP_SECRET);

      const data = dbPassword.toString(CryptoJS.enc.Utf8);

      if (password === data) {
        const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
          expiresIn: 3000 // expires in 50min
        });

        return res.status(200).json({ auth: true, token: token });
      } else {
        res.status(422).json({
          data: {},
          message: 'user is not valid',
        });
      }
    } catch(err) {
      res.status(500).json({ error: err });
    }
  },
  logout: (req, res) => res.status(200).json({ auth: false, token: null })
}

module.exports = authController;
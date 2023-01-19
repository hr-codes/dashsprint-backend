const express = require('express');
const router = express.Router();

const users = require('./users');
const auth = require('./auth');
const boards = require('./boards');
const groupTasks = require('./group_tasks');
const tasks = require('./tasks');

const middlewareAuth = require('../middlewares/Authentication')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());

  next();
});

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome!'
  })
});

router.route('/users')
  .get(middlewareAuth, users.getAll)
  .post(users.post)

router.route('/users/:id')
  .patch(middlewareAuth, users.patch)
  .get(middlewareAuth, users.get)
  .delete(middlewareAuth, users.delete)

router.route('/auth/sign-in')
  .post(auth.signIn)

router.route('/auth/sign-up')
  .post(users.post)

router.route('/auth/logout')
  .get(middlewareAuth, auth.logout)

router.route('/boards')
  .get(middlewareAuth, boards.getAll)
  .post(middlewareAuth, boards.post)


router.route('/boards/:id')
  .patch(middlewareAuth, boards.patch)
  .get(middlewareAuth, boards.get)
  .delete(middlewareAuth, boards.delete)

router.route('/group_tasks')
  .get(middlewareAuth, groupTasks.getAll)
  .post(middlewareAuth, groupTasks.post)


router.route('/group_tasks/:id')
  .patch(middlewareAuth, groupTasks.patch)
  .get(middlewareAuth, groupTasks.get)
  .delete(middlewareAuth, groupTasks.delete)


router.route('/tasks')
  .get(middlewareAuth, tasks.getAll)
  .post(middlewareAuth, tasks.post)


router.route('/tasks/:id')
  .patch(middlewareAuth, tasks.patch)
  .get(middlewareAuth, tasks.get)
  .delete(middlewareAuth, tasks.delete)

module.exports =  router;
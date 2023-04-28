const express = require('express');
const router = express.Router();

const users = require('./users');
const auth = require('./auth');
const taskStatuses = require('./taskStatuses');
const colors = require('./colors');
const boards = require('./boards');
const groupTasks = require('./groupTasks');
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

router.route('/task_statuses')
  .get(middlewareAuth, taskStatuses.getAll)
  .post(taskStatuses.post)

router.route('/task_statuses/:id')
  .patch(middlewareAuth, taskStatuses.patch)
  .get(middlewareAuth, taskStatuses.get)
  .delete(middlewareAuth, taskStatuses.delete)

router.route('/colors')
  .get(middlewareAuth, colors.getAll)

router.route('/boards')
  .get(middlewareAuth, boards.getAll)

router.route('/group_tasks')
  .get(middlewareAuth, groupTasks.getAll)

router.route('/tasks')
  .get(middlewareAuth, tasks.getAll)

module.exports =  router;
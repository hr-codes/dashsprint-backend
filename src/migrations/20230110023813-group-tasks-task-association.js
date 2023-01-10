'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('Tasks', {
      fields: ['groupTaskId'],
      type: 'foreign key',
      name: 'group_tasks_task_association',
      references: {
        table: 'GroupTasks',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Tasks', 'group_tasks_task_association')
  }
};

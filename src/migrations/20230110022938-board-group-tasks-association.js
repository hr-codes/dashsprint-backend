'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('GroupTasks', {
      fields: ['boardId'],
      type: 'foreign key',
      name: 'board_group_tasks_association',
      references: {
        table: 'Boards',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('GroupTasks', 'board_group_tasks_association')
  }
};

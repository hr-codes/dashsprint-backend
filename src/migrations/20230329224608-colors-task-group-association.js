'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('GroupTasks', {
      fields: ['colorId'],
      type: 'foreign key',
      name: 'group_tasks_colors_association',
      references: {
        table: 'Colors',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('GroupTasks', 'group_tasks_colors_association')
  }
};

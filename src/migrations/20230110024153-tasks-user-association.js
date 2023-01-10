'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('Tasks', {
      fields: ['assignedTo'],
      type: 'foreign key',
      name: 'tasks_user_association',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Tasks', 'tasks_user_association')
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('Boards', {
      fields: ['status'],
      type: 'foreign key',
      name: 'board_status_association',
      references: {
        table: 'BoardStatuses',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Boards', 'board_status_association')
  }
};

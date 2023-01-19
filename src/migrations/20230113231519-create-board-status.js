'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const statuses = [
      'active',
      'disabled',
      'archived',
      'deleted',
    ]

    statuses.forEach(status => {
      queryInterface.bulkInsert('BoardStatuses', [{
        name: status,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoardStatuses', null, {});
  }
};
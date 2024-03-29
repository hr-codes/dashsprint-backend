'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [
      {
        name: 'Tarefa 1',
        priority: 1,
        timeTracking: 0,
        assignedTo: 1,
        groupTaskId: 1,
        isActive: 1,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tarefa 2',
        priority: 1,
        timeTracking: 0,
        assignedTo: 1,
        groupTaskId: 1,
        isActive: 1,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tarefa 3',
        priority: 1,
        timeTracking: 0,
        assignedTo: 1,
        groupTaskId: 1,
        isActive: 1,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GroupTasks', [{
      name: 'Primeiro grupo de tarefas',
      colorId: 2,
      status: 1,
      boardId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GroupTasks', null, {});
  }
};

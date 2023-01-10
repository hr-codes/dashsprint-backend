'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Hector',
      lastName: 'Rodrigues',
      email: 'hectorrsa@outlook.com',
      password: "U2FsdGVkX18nQXIY7mRWKqGkC9CYTi6ETwfINrGlANg=",
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
    firstName: 'Deepthi',
    lastName: 'Purijala',
    age: 22,
    email: 'deepthipurijala@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    firstName: 'Srikar',
    lastName: 'Purijala',
    age: 19,
    email: 'srikarpurijala@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};

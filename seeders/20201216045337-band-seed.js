'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Bands', [
     {
       band_name: "Shela On 5",
       band_origin: "Yogyakarta",
       band_member: 5,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      band_name: "Trapesium",
      band_origin: "Malang",
      band_member: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      band_name: "Peterpun",
      band_origin: "Medan",
      band_member: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Bands', null, {})
  }
};

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
   return queryInterface.bulkInsert('Events', [
     {
       event_name: "Chimporia",
       event_location: "Bandung",
       event_schedule: "2020-12-14",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      event_name: "Diofair",
      event_location: "Jakarta",
      event_schedule: "2020-12-17",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      event_name: "HacktivDay",
      event_location: "Jakarta",
      event_schedule: "2020-12-25",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      event_name: "New Year Concert",
      event_location: "Surabaya",
      event_schedule: "2020-12-20",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      event_name: "Valentine Concert",
      event_location: "Semarang",
      event_schedule: "2021-02-14",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      event_name: "Daydream Concert",
      event_location: "Bali",
      event_schedule: "2020-12-31",
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
    return queryInterface.bulkDelete('Events', null, {})
  }
};

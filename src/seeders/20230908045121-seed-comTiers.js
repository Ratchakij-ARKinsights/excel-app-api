"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "com_tiers",
      [
        {
          rate_start: 600000,
          rate_end: null,
          percent: 18,
          tier_level: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 550000,
          rate_end: 599999,
          percent: 16,
          tier_level: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 450000,
          rate_end: 549999,
          percent: 13,
          tier_level: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 350000,
          rate_end: 449999,
          percent: 10,
          tier_level: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 250000,
          rate_end: 349999,
          percent: 7,
          tier_level: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 150000,
          rate_end: 249999,
          percent: 4,
          tier_level: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 100000,
          rate_end: 149999,
          percent: 2,
          tier_level: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          rate_start: 50000,
          rate_end: 99999,
          percent: 1,
          tier_level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("com_tiers", null, {});
  },
};

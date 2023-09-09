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
      "orders",
      [
        // AGENT NEW 4 LEAD 2
        {
          date: new Date("2023-01-02"),
          price: 20000,
          status: true,
          description: "",
          agent_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT NEW 5 LEAD 2
        {
          date: new Date("2023-01-03"),
          price: 30000,
          status: true,
          description: "",
          agent_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-02-01"),
          price: 30000,
          status: true,
          description: "",
          agent_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT NEW 6 LEAD 2
        {
          date: new Date("2023-02-02"),
          price: 150000,
          status: true,
          description: "",
          agent_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-02-03"),
          price: 150000,
          status: true,
          description: "",
          agent_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
          // AGENT NEW 7 LEAD 2
        {
          date: new Date("2023-01-12"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-02-12"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-03-12"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
         // AGENT EX 8 LEAD 2
         {
           date: new Date("2023-04-10"),
           price: 90000,
           status: true,
           description: "",
           agent_id: 8,
           created_at: new Date(),
           updated_at: new Date(),
          },
          // AGENT EX 9 LEAD 2
        {
          date: new Date("2023-04-11"),
          price: 100000,
          status: true,
          description: "",
          agent_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-04-12"),
          price: 100000,
          status: true,
          description: "",
          agent_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
          // AGENT EX 10 LEAD 2
        {
          date: new Date("2023-04-21"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-05-21"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-06-21"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT TOP 11 LEAD 2
        {
          date: new Date("2023-05-01"),
          price: 130000,
          status: true,
          description: "",
          agent_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT TOP 12 LEAD 2
        {
          date: new Date("2023-06-02"),
          price: 250000,
          status: true,
          description: "",
          agent_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-07-02"),
          price: 250000,
          status: true,
          description: "",
          agent_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT NEW 13 LEAD 3
        {
          date: new Date("2023-06-21"),
          price: 70000,
          status: true,
          description: "",
          agent_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-07-22"),
          price: 70000,
          status: true,
          description: "",
          agent_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
         // AGENT NEW 14 LEAD 3
        {
          date: new Date("2023-07-01"),
          price: 150000,
          status: true,
          description: "",
          agent_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-07-02"),
          price: 160000,
          status: true,
          description: "",
          agent_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-08-03"),
          price: 170000,
          status: true,
          description: "",
          agent_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT NEW 15 LEAD 3
        {
          date: new Date("2023-08-20"),
          price: 600000,
          status: true,
          description: "",
          agent_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // AGENT NEW 16 LEAD 3
        {
          date: new Date("2023-09-01"),
          price: 350000,
          status: true,
          description: "",
          agent_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
         // AGENT EX 17 LEAD 3
        {
          date: new Date("2023-10-02"),
          price: 600000,
          status: true,
          description: "",
          agent_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },

  // AGENT EX 18 LEAD 3


        {
          date: new Date("2023-11-03"),
          price: 150000,
          status: true,
          description: "",
          agent_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date("2023-11-04"),
          price: 200000,
          status: true,
          description: "",
          agent_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
          // AGENT EX 19 LEAD 3
        {
          date: new Date("2023-12-05"),
          price: 550000,
          status: true,
          description: "",
          agent_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
          // AGENT TOP 20 LEAD 3
        {
          date: new Date("2023-12-06"),
          price: 600000,
          status: true,
          description: "",
          agent_id: 20,
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

    await queryInterface.bulkDelete("orders", null, {});
  },
};

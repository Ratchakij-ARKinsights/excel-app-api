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
      "employees",
      [
        {
          name: "Area Manager 01",
          title: "Area Manager",
          type: "",
          leader_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Supervisor 01",
          title: "Supervisor",
          type: "",
          leader_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Supervisor 02",
          title: "Supervisor",
          type: "",
          leader_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 01",
          title: "Agent",
          type: "New",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 02",
          title: "Agent",
          type: "New",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 03",
          title: "Agent",
          type: "New",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 04",
          title: "Agent",
          type: "New",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 05",
          title: "Agent",
          type: "Experience",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 06",
          title: "Agent",
          type: "Experience",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 07",
          title: "Agent",
          type: "Experience",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 08",
          title: "Agent",
          type: "Top",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 09",
          title: "Agent",
          type: "Top",
          leader_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 10",
          title: "Agent",
          type: "New",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 11",
          title: "Agent",
          type: "New",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 12",
          title: "Agent",
          type: "New",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 13",
          title: "Agent",
          type: "New",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 14",
          title: "Agent",
          type: "Experience",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 15",
          title: "Agent",
          type: "Experience",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 16",
          title: "Agent",
          type: "Experience",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 17",
          title: "Agent",
          type: "Top",
          leader_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agent 18",
          title: "Agent",
          type: "Top",
          leader_id: 3,
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
    await queryInterface.bulkDelete("employees", null, {});
  },
};
////////////////////////////////////////////////////////////////

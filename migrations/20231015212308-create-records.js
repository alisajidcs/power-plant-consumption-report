"use strict";
const dotenv = require("dotenv");
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("record", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      netGeneration: {
        type: Sequelize.INTEGER,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      facilityCode: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropDatabase(process.env.POSTGRES_DB);
  },
};

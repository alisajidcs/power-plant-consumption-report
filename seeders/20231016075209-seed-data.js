"use strict";

const XLSX = require("xlsx");
const workbook = XLSX.readFile("imports/data.xlsx");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = getData();
    return queryInterface.bulkInsert("record", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("record", null, {});
  },
};

const getData = () => {
  const sheetName = "PLNT21";

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const findIndex = (headerName) => rows[0].findIndex((h) => h === headerName);

  const plantNameIndex = findIndex("Plant name");
  const longitudeIndex = findIndex("Plant longitude");
  const latitudeIndex = findIndex("Plant latitude");
  const facilityCodeIndex = findIndex("DOE/EIA ORIS plant or facility code");
  const stateIndex = findIndex("Plant state abbreviation");
  const generationIndex = findIndex("Plant annual net generation (MWh)");

  let data = [];

  for (let row of rows.slice(2)) {
    data.push({
      name: row[plantNameIndex],
      netGeneration: row[generationIndex] || 0,
      longitude: row[longitudeIndex],
      latitude: row[latitudeIndex],
      facilityCode: row[facilityCodeIndex],
      state: row[stateIndex],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return data;
};

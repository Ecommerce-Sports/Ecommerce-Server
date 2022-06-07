'use strict';

let keranjang = require("../data_json/keranjang.json");
keranjang = keranjang.map((e) => {
  e.createdAt = new Date();
  e.updatedAt = new Date();
  return e;
});

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
    await queryInterface.bulkInsert('Keranjangs', keranjang, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Keranjangs', null, {});
  }
};

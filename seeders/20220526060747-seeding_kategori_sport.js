'use strict';
let kategori = require("../data_json/kategori.json");
kategori = kategori.map((e)=>{
  e.createdAt=new Date();
  e.updatedAt=new Date();
  return e;
})
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
     await queryInterface.bulkInsert('Kategori_Sports', kategori,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Kategori_Sports', null, {});
  }
};

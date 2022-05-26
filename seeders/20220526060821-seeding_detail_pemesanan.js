'use strict';
let detail_pemesanan = require("../data_json/pesanan.json");
detail_pemesanan = detail_pemesanan.map((e)=>{
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
     await queryInterface.bulkInsert('Detail_Pemesanans', detail_pemesanan,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Detail_Pemesanans', null, {});
  }
};

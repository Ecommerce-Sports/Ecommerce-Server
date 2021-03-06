'use strict';
let pembayaran = require("../data_json/payments.json");
pembayaran = pembayaran.map((e)=>{
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
     await queryInterface.bulkInsert('Payments', pembayaran,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Payments', null, {});
  }
};

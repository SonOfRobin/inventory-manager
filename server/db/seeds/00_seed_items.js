/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const { faker } = require('@faker-js/faker');

const createFakeInventory = () => {
  const fakeInventory = [];
  for (let i = 0; i < 500; i++) {
    const item = {
      user: Math.ceil(Math.random() * 3),
      item_name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      quantity: faker.datatype.number({ min: 0, max: 100 }),
    };
    fakeInventory.push(item);
  }
  return fakeInventory;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del();
  await knex('items').insert(
    createFakeInventory()
  );
};


// 


// exports.seed = async function (knex) {
//   // Deletes ALL existing entries
//   await knex('inventory').del()
//   await knex('inventory').insert(
//     createFakeInventory()
//   );
// };
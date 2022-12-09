/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id');
    table.integer('user').references('id').inTable('users').onDelete('CASCADE');
    table.string('item_name').notNullable();
    table.string('description').defaultTo('N/A');
    table.integer('quantity').defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('items');
};
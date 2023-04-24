/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('social_feeds', function(table) {
        table.increments('id').primary();
        table.string('title');
        table.text('content');
        table.boolean('active').defaultTo(true);
        table.json('comments');
        table.json('likes');
        table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('social_feeds');
};

exports.up = function (knex, Promise) {
  return knex.schema.createTable("peoples", function (table) {
    table.increments().index();

    table.text("first_name");

    table.text("last_name");

    table.text("gender");

    table.text("city");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("peoples");
};

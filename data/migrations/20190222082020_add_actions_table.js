exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    // Foreign Key
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("NO ACTION")
      .onUpdate("CASCADE");

    tbl.string("name", 80).notNullable();

    tbl.string("description", 255).notNullable();
    tbl.string("notes", 128).notNullable();
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};

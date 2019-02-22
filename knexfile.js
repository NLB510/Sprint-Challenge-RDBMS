// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/sprintDb.sqlite3"
    },
    useNullAsDefault: true, 
    migrations: {
      directory: "./data/migrations",
      tableName: "migrations"
    },
    seeds:{ directory: "./data/seeds"}
  }
};

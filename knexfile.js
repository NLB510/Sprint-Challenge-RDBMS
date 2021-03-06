// Update with your config settings.
require('dotenv').config()
const pg = require('pg')

pg.defaults.ssl = true;



module.exports = {

  development: {
    client: "pg",
    connection: {
      filename: './data/sprintDb.sqlite3'
    },
    useNullAsDefault: true, 
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds:{ directory: "./data/seeds"},
    pool: {
      min: 2,
      max: 10
    }
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" },
  }

};

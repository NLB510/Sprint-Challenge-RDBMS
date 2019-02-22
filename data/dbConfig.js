const knex = require('knex')

// Retrieves configurations from knexfile for db
// Allowing models to connect to the db
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.development)
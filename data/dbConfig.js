require('dotenv').config();
const knex = require('knex')

// Retrieves configurations from knexfile for db
// Allowing models to connect to the db
const knexConfig = require('../knexfile');

const environment = process.env.ENVIRONMENT || 'development';

module.exports = knex(knexConfig[environment])
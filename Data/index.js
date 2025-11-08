const knex = require('knex');
const configData = require('./knexfile');

// Escolhe a configuração do ambiente
const connection = knex(configData.production);

// Exporta a conexão principal
module.exports = { connection };

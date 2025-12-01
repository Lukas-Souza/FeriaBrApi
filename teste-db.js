const knexConfig = require('./Data/knexfile').production;
const knex = require('knex')(knexConfig);

knex
  .raw('SELECT 1+1 AS result')
  .then(() => {
    console.log('✅ Conectado ao MySQL com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Erro de conexão:', err);
    process.exit(1);
  });

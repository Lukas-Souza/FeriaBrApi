const controller = require('../controllers/controller');
const knexConfig = require('../Data/knexfile').production;
const knex = require('knex')(knexConfig);
const express = require('express');
const server = express();

module.exports = [
  server.get('/', (req, res) => {
    res.json([
      { version: 2.1 },
      { 'quais feriados tem no mes do mes': '/feriado/[number]' },
      { 'quais feriados nacional tem no mes do mes': '/domes/nacional?mes=[number]' },
      { name: 'FeriaAPI' },
    ]);
  }),
/**
 * @swagger
 * /feriados/:
 *   get:
 *     summary: Return all records
 *     tags: [All records]
 *     description: Testando
 *     responses:
 *       200:
 *         description: OK
 */
  server.get('/feriados', controller.returnAllregistration),
  /**
 * @swagger
 * /feriados/{Date}:
 *   get:
 *     summary: Return record by Date
 *     tags: [Date]
 *     parameters:
 *       - in: path
 *         name: Date
 *         schema:
 *           type: string
 *         required: true
 *         description: Data select
 *     responses:
 *       200:
 *         description: OK
 */
  server.get('/feriados/:Date', controller.searchRegistrationByDateParamen),
  /**
   * 
   * @swagger
   * /feriados/{id}/{nome_feriado}/{data}/{tipo}/{estado}
   */

  server.put('/atualizar/:id/:nome_feriado/:data/:tipo/:estado ', controller.returnAllregistration),
  // USER ROUTERS
  // USER ROUTERS
  server.post('/castrar', controller.createUser),
  server.get('/castrar/:id', controller.getById),
  server.put('/castrar/:id', controller.updateUser),
  server.delete('/castrar/:id', controller.deleteUser),
];

const controller = require('../controllers/controller')
const knexConfig = require('../Data/knexfile').production;
const knex = require('knex')(knexConfig);
const express = require("express")
const server = express()
module.exports = [
    server.get("/", (req, res) => {
        res.json(
            [   { "version": 2.1 },
                { "quais feriados tem no mes do mes": "/feriado/[number]" },
                { "quais feriados nacional tem no mes do mes": "/domes/nacional?mes=[number]" },
                {"name":"FeriaAPI"}
]
      )
    }),
  server.get('/feriados', controller.returnAllregistration),
  server.get('/feriados/:Date', controller.searchRegistrationByDateParamen),
  server.post('/add-feriado/:nome_feriado/:data/:tipo/:estado', controller.createRegistration),
  server.put('/atualizar/:id/:nome_feriado/:data/:tipo/:estado ', controller.returnAllregistration)

]
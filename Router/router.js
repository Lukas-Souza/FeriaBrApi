const knexConfig = require('../Data/knexfile').production;
const knex = require('knex')(knexConfig);
const express = require("express")
const server = express()
module.exports = [
    server.get("/", (req, res) => {
        res.json(
            [   { "version": 1.0 },
                { "quais feriados tem no mes do mes": "/domes?mes=[number]" },
                { "quais feriados nacional tem no mes do mes": "/domes/nacional?mes=[number]" },
                {"name":"FeriaAPI"}
]
        )
    }),

server.get('/feriados', async (req, res) => {
  try {
    const feriados = await knex('feriados').select('*');
    res.json(feriados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}),

/*
  POST /add-feriado/:nome/:data/:tipo/:estado
  Exemplo:
  http://localhost:3000/add-feriado/Natal/2025-12-25/Nacional/Todos
*/
server.post('/add-feriado/:nome/:data/:tipo/:estado', async (req, res) => {
  const { nome, data, tipo, estado } = req.params;

  try {
    await knex('feriados').insert({ nome, data, tipo, estado });
    res.json({ mensagem: '✅ Feriado adicionado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}),

/*
  PUT /atualizar/:id/:nome/:data/:tipo/:estado
  Exemplo:
  http://localhost:3000/atualizar/1/Carnaval/2025-02-28/Estadual/RJ
*/
server.put('/atualizar/:id/:nome/:data/:tipo/:estado', async (req, res) => {
  const { id, nome, data, tipo, estado } = req.params;

  try {
    await knex('feriados')
      .where({ id })
      .update({ nome, data, tipo, estado });
    res.json({ mensagem: '♻️ Feriado atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
})

]
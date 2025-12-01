const express = require('express');
const router = require('./Router/router');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
const PORT = 8000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Versão do OpenAPI
    info: {
      title: 'FeriApi (Busca de feriado no mês)',
      version: '1.0.0',
      description: 'Api de busca de novos ou antigos feriados do mês selecionado',
    },
    servers: [
      {
        url: 'http://localhost:8000/',
      },
    ],
  },
  apis: ['./Router/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Rota para acessar a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(router);

app.use(express.json());
module.exports = app;

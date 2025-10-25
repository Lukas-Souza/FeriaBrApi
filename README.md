# FeriAPI – API de Feriados Nacionais do Brasil

```markdown
# 🗓️ FeriAPI – API de Feriados Nacionais do Brasil

## 📘 Descrição do Projeto

**FeriAPI** é uma API simples desenvolvida com **Node.js** e **Express**, que retorna uma lista de feriados nacionais do Brasil.  
Os dados são armazenados em um arquivo **JSON**, sem uso de banco de dados.  

O projeto foi desenvolvido com o objetivo de aplicar práticas de **Integração Contínua (CI)** e **Entrega Contínua (CD)**, utilizando **GitHub Actions** e **Render** para **deploy automático**.

---

## ⚙️ Stack Utilizada

- **Node.js (v18)**
- **Express**
- **Jest + Supertest** (para testes automatizados)
- **GitHub Actions** (CI/CD)
- **Render Cloud** (deploy automático)

---

## 🧱 Estrutura do Projeto

```

feriapi/

│

├── src/

│   └── index.js

│

├── data/

│   └── feriados.json

│

├── test/

│   └── api.test.js

│

├── .github/

│   └── workflows/

│       ├── ci.yml

│       └── deploy.yml

│

├── package.json

├── README.md

```yaml
---

## 🚀 Endpoints da API

### 🔹 **GET `/feriados`**

Retorna todos os feriados nacionais cadastrados no arquivo JSON.

**Exemplo de resposta:**
```json
[
  { "data": "01/01", "nome": "Confraternização Universal" },
  { "data": "07/09", "nome": "Independência do Brasil" },
  { "data": "25/12", "nome": "Natal" }
]
```

## Testes Automatizados

Os testes garantem que a rota `/feriados` está funcionando corretamente.

**Comando para rodar os testes:**

```bash
npm test
```

Exemplo de teste:

```jsx
const request = require('supertest');
const express = require('express');
const feriados = require('../data/feriados.json');

const app = express();
app.get('/feriados', (req, res) => res.json(feriados));

test('GET /feriados retorna lista de feriados', async () => {
  const res = await request(app).get('/feriados');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});
```

## Pipeline de CI/CD

O projeto possui duas automações principais configuradas com **GitHub Actions**.

### CI – Integração Contínua (`.github/workflows/ci.yml`)

Executa automaticamente os **testes** sempre que houver um `push` ou `pull request`.

```yaml
name: CI - Testes

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

### CD – Deploy Contínuo (`.github/workflows/deploy.yml`)

Realiza o **deploy automático no Render** sempre que há `push` na branch `main`.

```yaml
name: CD - Deploy no Render

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy via Render
        run: echo "Deploy feito automaticamente pela integração GitHub + Render"
```

## Deploy no Render

O deploy foi feito na plataforma **Render Cloud**, que automaticamente constrói e executa a aplicação a cada novo push na branch principal.

**Configuração usada no Render:**

- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Root Directory:** *(vazio, pois o package.json está na raiz)*

*( link real  deploy ativo)*

## Aprendizados sobre CI/CD

Durante o desenvolvimento da **FeriAPI**, aprendemos a importância de automatizar processos no ciclo de desenvolvimento.

- A **Integração Contínua (CI)** garante que o código seja testado automaticamente a cada modificação.
- A **Entrega Contínua (CD)** simplifica o deploy, evitando etapas manuais e garantindo que a versão em produção esteja sempre atualizada.

Também aprendemos a:

- Criar pipelines usando **GitHub Actions**;
- Automatizar testes com **Jest** e **Supertest**;
- Conectar o repositório ao **Render** para **deploy automático**

  obs: link da documentação completa: https://www.notion.so/Engenharia-Documenta-o-2968eed0f414809ca68dcc6ba2a63a13

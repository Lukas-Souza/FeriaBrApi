const app = require('./index');
const PORT = 8000;

app.listen(PORT, () => {
  console.log('API rodando, http://localhost:' + PORT);
});

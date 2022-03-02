require('dotenv').config();
const express = require('express');

const { errorHandler } = require('./middlewares/index');
require('express-async-errors');

const { productRouter, productByIdRouter,
   salesRouter, salesByIdRouter } = require('./routes/index.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRouter);
app.use('/products/:id', productByIdRouter);

app.use('./sales', salesRouter);
app.use('./sales/:id', salesByIdRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

require('dotenv').config();
const express = require('express');

require('express-async-errors');
const { errorHandler } = require('./middlewares/index');

const productRouter = require('./routes/products.routes');
const salesRouter = require('./routes/sales.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRouter);

app.use('/sales', salesRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

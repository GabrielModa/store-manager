const express = require('express');
const getlAll = require('../controllers/getAllProducts');

const productRouter = express.Router();

productRouter.get('/products',
getlAll.getlAllProducs);

module.exports = productRouter;
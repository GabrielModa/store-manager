const productModel = require('../models/products.models');

const getAllProducts = async () => {
  const result = await productModel.productsAll();
  return result;
};

module.exports = {
  getAllProducts,
};

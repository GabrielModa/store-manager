const productService = require('../services/products.services');

const getlAll = async (_req, res) => {
  const products = await productService.getlAll();
  if (!products) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(products);
};

module.exports = {
  getlAll,
};
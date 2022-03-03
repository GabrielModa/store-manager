const productsService = require('../services/products.services');

const getAll = async (_req, res, _next) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res, _next) => {
 const { id } = req.params;
 
 const productsById = await productsService.getById(id);
 if (!productsById) res.status(404).json({ message: 'Product not found' });
 return res.status(200).json(productsById);
};

module.exports = {
  getAll,
  getById,
};
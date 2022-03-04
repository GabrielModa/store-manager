const productsService = require('../services/productsServices');
const productsValidations = require('../middlewares/productsValidations');
const productsModels = require('../models/productsModels');

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

const createProducts = async (req, res) => {
  const { name } = req.body;  

  const { error } = productsValidations.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  
  const names = await productsService.getAll();
  const validateName = names.some((e) => e.name === name);
  if (validateName) return res.status(409).json({ message: 'Product already exists' });

  const { code, result } = await productsService.createProducts(req.body);
return res.status(code).json(result);
};

const putById = async (req, res, _next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  // const { error } = productsValidations.validate(req.body);
  // if (error) {
  //   const [code, message] = error.message.split('|');
  //   return res.status(code).json({ message });
  // }
  const { code, result } = await productsService.putById(id, { name, quantity });
  if (!result) return res.status(404).json({ message: 'Product not found' });

  return res.status(code).json(result);
};
module.exports = {
  getAll,
  getById,
  createProducts,
  putById,
};
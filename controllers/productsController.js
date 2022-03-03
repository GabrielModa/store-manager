const productsService = require('../services/productsServices');
const productsValidations = require('../middlewares/productsValidations');

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
  const { error } = productsValidations.validate(req.body);
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json(message);    
  }
  
  const { code, data } = await productsService.createProducts(req.body);
  return res.status(code).json(data);
};

module.exports = {
  getAll,
  getById,
  createProducts,
};

// const { name } = req.body;
//   if (productsService.getAll()
//   .some((n) => n.name === name)) return res.status(409).json({ message: 'Product already exists' });
//   return res.status(201).json(productsService.createProducts(req.body));
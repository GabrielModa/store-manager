const salesValidations = require('../middlewares/salesValidations');
const salesServices = require('../services/salesServices');

const getAll = async (_req, res, _next) => {
  const sales = await salesServices.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res, _next) => {
 const { id } = req.params;
 
 const salesById = await salesServices.getById(id);
 if (salesById.length === 0) {
 return res.status(404).json({ message: 'Sale not found' });
 }
 
 return res.status(200).json(salesById);
};

const postSales = async (req, res, _next) => {
 const { error } = salesValidations.validate(req.body);
 if (error) {
   const [code, message] = error.message.split('|');
   return res.status(code).json({ message });
 }
};

const salesProducts = async (req, res, _next) => {
  const sales = req.body;

  const { code, result } = await salesServices.salesProducts(sales);
  res.status(code).json(result);
};

const put = async (req, res, _next) => {
  const { id } = req.params;
  
  const { code, result } = await salesServices.put(id, req.body[0]);
  console.log(result);
  res.status(code).json(result);
};

module.exports = {
  getAll,
  getById,
  postSales,
  salesProducts,
  put,
};
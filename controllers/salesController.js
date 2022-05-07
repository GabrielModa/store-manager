const salesServices = require('../services/salesServices');
const salesValidate = require('../schemas/sales');

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

const salesProducts = async (req, res, _next) => {
  const sales = req.body;

  const { error } = salesValidate.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  const { code, result } = await salesServices.salesProducts(sales);
  console.log(result);

  res.status(code).json(result);
};

const put = async (req, res, _next) => {
  const { id } = req.params;

  const { error } = salesValidate.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  const { code, result } = await salesServices.put(id, req.body[0]);
  res.status(code).json(result);
};

module.exports = {
  getAll,
  getById,
  salesProducts,
  put,
};
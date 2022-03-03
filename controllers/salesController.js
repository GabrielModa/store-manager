const salesServices = require('../services/salesServices');

const getAll = async (_req, res, _next) => {
  const sales = await salesServices.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res, _next) => {
 const { id } = req.params;
 
 const salesById = await salesServices.getById(id);
 if (salesById.length === 0) res.status(404).json({ message: 'Sale not found' });
 return res.status(200).json(salesById);
};

module.exports = {
  getAll,
  getById,
};
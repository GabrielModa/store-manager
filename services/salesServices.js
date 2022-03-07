const salesModel = require('../models/salesModels'); 

const getAll = async () => salesModel.getAll();
const getById = async (id) => salesModel.getById(id);

const salesProducts = async (sales) => {
const result = await salesModel.salesProducts(sales);

return { code: 201, result };
};

module.exports = {
  getAll,
  getById,
  salesProducts,
};
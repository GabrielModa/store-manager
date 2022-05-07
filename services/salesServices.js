const salesModel = require('../models/salesModels'); 

const getAll = async () => salesModel.getAll();
const getById = async (id) => salesModel.getById(id);

const salesProducts = async (sales) => {
const result = await salesModel.salesProducts(sales);
return { code: 201, result };
};

const put = async (id, { productId, quantity }) => {
  const result = await salesModel.put(id, productId, quantity);

  return { code: 200, result };
};

module.exports = {
  getAll,
  getById,
  salesProducts,
  put,
};
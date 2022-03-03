const productsModel = require('../models/productsModels');

const getAll = async () => productsModel.getAll();
const getById = async (id) => productsModel.getById(id);

const createProducts = async ({ name, quantity }) => {
  const result = await productsModel.createProducts(name, quantity);
 
  return { code: 201, result }; 
  };

module.exports = {
  getAll,
  getById,
  createProducts,
};

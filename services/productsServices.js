const productsModel = require('../models/productsModels');

const getAll = async () => productsModel.getAll();
const getById = async (id) => productsModel.getById(id);

const createProducts = async ({ name, quantity }) => {
  const result = await productsModel.createProducts(name, quantity);
  
  const data = {
    created: result,
  };

  return { code: 201, data }; 
};

module.exports = {
  getAll,
  getById,
  createProducts,
};

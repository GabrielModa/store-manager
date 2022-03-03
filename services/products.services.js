const productsModel = require('../models/products.models');

const getAll = async () => productsModel.getAll();
const getById = async (id) => productsModel.getById(id);

module.exports = {
  getAll,
  getById,
};

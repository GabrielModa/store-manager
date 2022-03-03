const salesModel = require('../models/salesModels'); 

const getAll = async () => salesModel.getAll();
const getById = async (id) => salesModel.getById(id);

module.exports = {
  getAll,
  getById,
};
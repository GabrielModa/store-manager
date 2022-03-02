const DB = require('./connection');

const productsAll = async () => {
  const [result] = await DB.execute('SELECT * FROM StoreManager.products');
   return result;
  };

module.exports = {
  productsAll,
};
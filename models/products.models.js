const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
   return result;
  };

  const getById = async (id) => {
    const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [result] = await connection.execute(SQL, [id]);    
    return result[0];
  };

module.exports = {
  getAll,
  getById,
};
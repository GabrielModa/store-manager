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

  const createProducts = async (name, quantity) => {
    const SQL = 'INSERT StoreManager.products (name, quantity) VALUES (?, ?)';
    const [result] = await connection.execute(SQL, [name, quantity]);
    return ({
      id: result.insertId,
      name,
      quantity,
    });
  };

module.exports = {
  getAll,
  getById,
  createProducts,
};
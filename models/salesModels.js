const connection = require('./connection');

const getAll = async () => {
  const SQL = `SELECT sale_id, date, product_id, quantity 
  FROM StoreManager.sales_products as sp
  JOIN StoreManager.sales as p
  ON sp.sale_id = p.id`;

  const [result] = await connection.execute(SQL);

  const camelCaseResult = result.map((colum) => ({
    saleId: colum.sale_id,
    date: colum.date,
    productId: colum.product_id,
    quantity: colum.quantity }));
  
   return camelCaseResult;
  };

  const getById = async (id) => {
    const SQL = `SELECT date, product_id, quantity 
    FROM StoreManager.sales_products as sp
    JOIN StoreManager.sales as p
    ON sp.sale_id = p.id WHERE p.id = ?`;
    const [result] = await connection.execute(SQL, [id]);   
    const camelCaseResult = result.map((colum) => ({
    date: colum.date,
    productId: colum.product_id,
    quantity: colum.quantity,
    }));
    
    return camelCaseResult;
  };

module.exports = {
  getAll,
  getById,
};
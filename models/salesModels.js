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

 const salesProducts = async (sales) => {
    const SQL_ID = 'INSERT StoreManager.sales () VALUES ()';    
    const [resultId] = await connection.execute(SQL_ID);
    const { insertId } = resultId;

    const SQL_PRODUCTS = `INSERT StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;

    sales.map(async (p) => {
      await connection.execute(SQL_PRODUCTS, [insertId, p.productId, p.quantity]);
    });

    const arrayProducts = sales.map((p) => ({
      productId: p.productId,
      quantity: p.quantity,
    }));

  return { id: insertId, itemsSold: arrayProducts };
};

const put = async (id, productId, quantity) => {
    const SQL_PUT = `UPDATE StoreManager.sales_products 
    SET product_id = ?, quantity = ? 
    WHERE sale_id = ?`;
    await connection.execute(SQL_PUT, [productId, quantity, id]);
    
    return {
      saleId: id,
      itemUpdated: [
        {
          productId,
          quantity,
        },
      ],
    };
};

module.exports = {
  getAll,
  getById,
  salesProducts,
  put,
};
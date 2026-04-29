import pool from '../config/db.js';

export const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  return rows;
};

export const createProduct = async (product) => {
  const { name, brand, price, description, image, stock } = product;

  const [result] = await pool.query(
    `INSERT INTO products (name, brand, price, description, image, stock)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, brand, price, description, image, stock]
  );

  return result;
};
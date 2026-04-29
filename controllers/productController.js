import { getAllProducts } from '../models/productModel.js';
import { createProduct } from '../models/productModel.js';

export const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const addProduct = async (req, res) => {
  try {
    const result = await createProduct(req.body);
    res.status(201).json({ message: 'Product added successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product' });
  }
};
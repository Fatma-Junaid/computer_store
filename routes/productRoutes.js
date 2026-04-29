import express from 'express';
import { fetchProducts } from '../controllers/productController.js';
import { addProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', fetchProducts);

router.post('/', addProduct);
export default router;
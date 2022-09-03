import express from 'express';
import {
  getAllProducts,
  getCategories,
  getSingleProduct,
  getProductBySearch,
  getProductsByCategory,
} from '../controllers/products.js';
const router = express.Router();
router.route('/').get(getAllProducts);
router.get('/categories', getCategories);
router.get('/category/:category', getProductsByCategory);
router.get('/search', getProductBySearch);
router.get('/:id', getSingleProduct);

export default router;

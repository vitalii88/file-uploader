import { Router } from 'express';
import { createProduct, getAllProducts } from '../controllers/productController.js';
import { uploadProductImageLocal, uploadProductImage } from '../controllers/uploadsController.js';

const router = Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads/local').post(uploadProductImageLocal);
router.route('/uploads').post(uploadProductImage);

export default router;

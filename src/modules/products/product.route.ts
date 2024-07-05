import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/:productId', ProductControllers.getSingleProduct);
router.get('/', ProductControllers.getAllProduct);

export const ProductRoutes = router;

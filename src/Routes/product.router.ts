import { Router } from 'express';
import productController from '../controller/product.controller';

const productPouter = Router();

productPouter.post('/products', productController.createProduct);

export default productPouter;

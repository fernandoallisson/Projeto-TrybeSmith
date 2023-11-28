import { Router } from 'express';
import productController from '../controller/product.controller';

const productPouter = Router();

productPouter.post('/products', productController.createProduct);
productPouter.get('/products', productController.getAllProducts);

export default productPouter;

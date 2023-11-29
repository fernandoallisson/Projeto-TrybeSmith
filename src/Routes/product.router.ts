import { Router } from 'express';
import productController from '../controller/product.controller';
import { validateProductName, validateProductPrice } from '../middlewares/product-validate';

const productPouter = Router();

productPouter.post(
  '/products',
  validateProductName,
  validateProductPrice,
  productController.createProduct,
);
productPouter.get('/products', productController.getAllProducts);

export default productPouter;

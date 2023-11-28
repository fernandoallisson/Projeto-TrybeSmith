import { Product } from '../types/Product';

import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

const create = async (product: Omit<Product, 'id'>): Promise<ProductSequelizeModel | undefined> => {
  const { name, orderId, price } = product;
  const newProduct = await ProductModel.create({ name, orderId, price });
  console.log('RETORNOOOOO', newProduct);
  if (!newProduct) {
    throw new Error('Error creating product');
  }

  return newProduct;
};

export default { create };
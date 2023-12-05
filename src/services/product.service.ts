import { Product } from '../types/Product';

import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

const create = async (product: Omit<Product, 'id'>): Promise<ProductSequelizeModel | unknown> => {
  const { name, orderId, price } = product;
  const newProduct = await ProductModel.create({ name, orderId, price });
  if (!newProduct) {
    throw new Error('Error creating product');
  }

  return newProduct;
};

const getAll = async (): Promise<ProductSequelizeModel[] | unknown> => {
  const products = await ProductModel.findAll();
  if (!products) {
    throw new Error('Error getting products');
  }

  return products;
};

export default { create, getAll };
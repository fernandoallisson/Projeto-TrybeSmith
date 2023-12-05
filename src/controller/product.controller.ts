import { Response, Request } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<Response | void> => {
  const { name, orderId, price } = req.body;
  const newProduct = await productService.create({ name, orderId, price });
  res.status(201).json(newProduct);
};

const getAllProducts = async (_req: Request, res: Response): Promise<Response | void> => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export default { createProduct, getAllProducts };

// FUNÇÕES DE CONTROLLERS TESTADAS UNITARIAMENTES
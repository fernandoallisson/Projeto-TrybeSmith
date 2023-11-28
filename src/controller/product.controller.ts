import { Response, Request } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<Response | void> => {
  const { name, orderId, price } = req.body;
  const newProduct = await productService.create({ name, orderId, price });
  res.status(201).json(newProduct);
};

export default { createProduct };
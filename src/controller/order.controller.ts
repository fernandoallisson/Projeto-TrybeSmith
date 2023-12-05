import { Response, Request } from 'express';
import orderService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response): Promise<Response | void > => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const createOrders = async (req: Request, res: Response): Promise<Response | void> => {
  const newOrder = await orderService.createOrder(req.body) as any;
  res.status(201).json(newOrder.data);
};
export default { getAllOrders, createOrders };
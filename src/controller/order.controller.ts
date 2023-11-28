import { Response, Request } from 'express';
import orderService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response): Promise<Response | void> => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

export default { getAllOrders };
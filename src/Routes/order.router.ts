import { Router } from 'express';
import orderController from '../controller/order.controller';

const ordersRouter = Router();

// ordersRouter.post('/orders', orderController.createOrders);
ordersRouter.get('/orders', orderController.getAllOrders);

export default ordersRouter;

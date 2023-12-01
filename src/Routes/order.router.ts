import { Router } from 'express';
import orderController from '../controller/order.controller';
import validateHeaders from '../middlewares/validate-headers';
import {
  validateOrdersUser,
  validateOrdersProducts } from '../middlewares/order-validate';
  
const ordersRouter = Router();

ordersRouter.post(
  '/orders', 
  validateHeaders, 
  validateOrdersProducts,
  validateOrdersUser,
  orderController.createOrders,
);
ordersRouter.get('/orders', orderController.getAllOrders);

export default ordersRouter;

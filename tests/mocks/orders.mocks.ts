import { Request, Response } from "express";

const requestOrders = {
  "productIds": [1, 2],
  "userId": 1
};

const responseOrders = {
  "productIds": [1, 2],
  "userId": 1
};

const RequestOrdersGetAll = [ { dataValues: { id: 1, userId: 1, productIds: [2, 1] } } ];

export { requestOrders, responseOrders, RequestOrdersGetAll }
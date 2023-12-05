import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { responseOrders } from '../../mocks/orders.mocks';
import orderService from '../../../src/services/orders.service';
import orderController from '../../../src/controller/order.controller';
chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Retorna um status 200 e um array de objetos', async function () {
    sinon.stub(orderService, 'getAll').resolves(responseOrders);
    await orderController.getAllOrders(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseOrders);
  });
  it('Retorna um status 201 e um objeto', async function () {
    sinon.stub(orderService, 'createOrder').resolves(responseOrders);
    
    await orderController.createOrders(req, res);
    
    expect(res.status).to.have.been.calledWith(201);
  });
});

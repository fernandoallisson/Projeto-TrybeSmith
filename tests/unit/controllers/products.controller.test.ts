import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
const ProductsController = require('../../../src/controllers/products.controller');

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it.only('testa se a função retorna um ststus 201 e um json com o novo produto', async function () {
    const req = {
      body: {
        name: 'Product 1',
        orderId: 1,
        price: 100,
      },
    };
    await ProductsController.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({
      id: 1,
      name: 'Product 1',
      orderId: 1,
      price: 100,
    });
  });
});

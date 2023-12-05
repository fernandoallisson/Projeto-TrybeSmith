import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductsController from '../../../src/controller/product.controller';
import productService from '../../../src/services/product.service';
import { productsPostRequest, productsPostResponse, productsResponseGetAll } from '../../mocks/Products.mocks';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('testa se a função retorna um status 201 e um json com o novo produto', async function () {
    sinon.stub(productService, 'create').resolves(productsPostResponse);
    await ProductsController.createProduct(productsPostRequest, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsPostResponse);
  });
  it('Testa se a função GetAllProducts retorna um status 200 e um json com os produtos', async function () {
    sinon.stub(productService, 'getAll').resolves(productsResponseGetAll);
    await ProductsController.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsResponseGetAll);
  });
});

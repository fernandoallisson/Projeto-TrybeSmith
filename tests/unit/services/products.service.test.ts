import { expect } from 'chai';
import sinon from 'sinon';
import ProductsService from '../../../src/services/product.service';
import ProductModel from '../../../src/database/models/product.model';
import ProductController from '../../../src/controller/product.controller';
import { Request, Response } from 'express';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se a função retorna um objeto de produtos', async function () {
    const product = {
      name: 'Product 1',
      orderId: 1,
      price: '30 peças de ouro',
      id: 1,
    };

    const newProduct = await ProductModel.build(product);
    sinon.stub(ProductsService, 'create').resolves(newProduct);


    const req = {} as Request;
    const res = {} as Response;
    await ProductController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
})
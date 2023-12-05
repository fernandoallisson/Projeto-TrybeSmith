import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import ProductsService from '../../../src/services/product.service';
import ProductModel from '../../../src/database/models/product.model';
import { productsResponseGetAll } from '../../mocks/Products.mocks';

chai.use(sinonChai);

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('retorna um erro quando o produto não o cria', async function () {
    sinon.stub(ProductModel, 'findOne').resolves(null);
    await ProductsService.create({ name: 'teste', price: 'teste', orderId: 999 })
      .catch((err) => {
        expect(err).to.be.an('error');
      });
  });

  it('Retorna um produto quando criado', async function () {
    sinon.stub(ProductModel, 'create').resolves([] as any);
    const products = await ProductsService.getAll();
    expect(products).to.be.an('array');
  });

  it('Retorna todos os produtos', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(productsResponseGetAll as any);
    const products = await ProductsService.getAll();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(productsResponseGetAll.length);
  });

  it('Retorna um erro quando nenhum produto é encontrado', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(null as any);
    await ProductsService.getAll()
      .catch((err) => {
        expect(err).to.be.an('error');
      });
  });
})
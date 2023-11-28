import { expect } from 'chai';
import sinon from 'sinon';
import ProductsService from '../../../src/services/product.service';
import ProductModel from '../../../src/database/models/product.model';
describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it.only('Testa se a função retorna um objeto de produtos', async function () {
    const product = {
      name: 'Product 1',
      orderId: 1,
      price: '30 peças de ouro',
      id: 1,
    };
    // {
    //   id: 7,
    //   name: 'Martelo de Thor',
    //   orderId: 4,
    //   price: '30 peças de ouro'
    // }

    // TERCEIRO PASSO: mockar o retorno da função create
    // para que ela não acesse o banco de dados
    // e retorne o objeto product
    sinon.stub(ProductModel, 'create').resolves(undefined);
    const newProduct = await ProductsService.create(product);

    expect(newProduct).to.be.deep.equal(product);
  });
})
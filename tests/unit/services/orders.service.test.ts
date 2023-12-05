import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import OrdersService from '../../../src/services/orders.service';
import OrderModel from '../../../src/database/models/order.model';
import { RequestOrdersGetAll, responseOrders } from '../../mocks/orders.mocks';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('getAll retorna um array de objetos', async function () {
    sinon.stub(OrderModel, 'findAll').resolves([]);
    const response = await OrdersService.getAll();
    expect(response).to.be.deep.equal([]);
  });
  it('createOrder retorna um objeto com status e data', async function () {
    sinon.stub(OrderModel, 'create').resolves({ dataValues: { id: 5, userId: 1 } } as any);
    sinon.stub(ProductModel, 'update').resolves(responseOrders as any);

    const response = await OrdersService.createOrder({ userId: 1, productIds: [1, 2] });
    expect(response).to.be.deep.equal({ status: 'SUCESSO', data: { userId: 1, productIds: [1, 2] }});
  });
});

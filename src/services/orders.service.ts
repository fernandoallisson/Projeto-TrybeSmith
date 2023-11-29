import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

export interface OrderData {
  id?: number;
  userId?: number;
  productIds?: number[];
}

export interface OrderProductData {
  productIds: number[];
  userId: number;
}

export interface ServiceResponse {
  status: string;
  data: OrderProductData;
}

const getAll = async (): Promise<OrderData[]> => {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const ordersMapped = orders.map(({ dataValues }) => ({
    id: Number(dataValues.id),
    userId: Number(dataValues.userId),
    productIds: dataValues.productIds?.map((item) => item.id),
  }));

  return ordersMapped;
};

const createOrder = async (order: OrderProductData): Promise<ServiceResponse> => {
  const { userId, productIds } = order;
  productIds.forEach(async (product: number) => {
    const createOrders = await OrderModel.create({ userId });
    const { id } = createOrders.dataValues;
    await ProductModel.update({ orderId: id }, { where: { id: product } });
  });
  return {
    status: 'SUCESSO',
    data: order,
  };
};

export default { getAll, createOrder };
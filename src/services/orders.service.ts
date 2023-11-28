import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

export interface OrderData {
  id: number;
  userId: number;
  productIds?: number[];
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

export default { getAll };
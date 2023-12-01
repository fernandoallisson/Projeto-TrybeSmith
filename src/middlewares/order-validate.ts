import { Request, Response, NextFunction } from 'express';
import UserModel from '../database/models/user.model';

const validateOrdersUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  console.log('userIdddddd', userId);

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const foundUser = await UserModel.findOne({ where: { id: userId } });
  if (!foundUser) {
    return res.status(404).json({ message: '"userId" not found' });
  }

  next();
};

const validateOrdersProducts = (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;

  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }

  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }

  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  next();
};

export { validateOrdersUser, validateOrdersProducts };
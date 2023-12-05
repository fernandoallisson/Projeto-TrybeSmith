import { NextFunction, Request, Response } from 'express';
import TOKEN from '../utils/create-token';

const validateHeaders = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  console.log('authorizationnnnnnn', authorization);
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split('Bearer ')[1];
  const validate = TOKEN.verifyToken(token);
  if (validate.error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default validateHeaders;
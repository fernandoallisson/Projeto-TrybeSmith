import jwt from 'jsonwebtoken';

const SECRET_KEY: string = process.env.JWT_SECRET || 'meusegredo';

export interface Payload {
  id: number;
  email: string;
}

const createToken = (payload: Payload): string => {
  const token: string = jwt.sign(payload, SECRET_KEY);

  return token;
};

const verifyToken = (token: string): Payload => {
  const decoded = jwt.verify(token, SECRET_KEY) as Payload;
  return decoded;
};

export { createToken, verifyToken };

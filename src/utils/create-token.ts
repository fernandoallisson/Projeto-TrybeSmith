import jwt from 'jsonwebtoken';

const SECRET_KEY: string = process.env.JWT_SECRET || 'meusegredo';

export interface Payload {
  id: number;
  email: string;
}

type VerifyTokenReturn = {
  error: boolean;
  data: string | jwt.JwtPayload | {
    message?: string | jwt.JsonWebTokenError | jwt.NotBeforeError | jwt.TokenExpiredError;
  };
};

const createToken = (payload: Payload): string => {
  const token: string = jwt.sign(payload, SECRET_KEY);

  return token;
};

const verifyToken = (token: string): VerifyTokenReturn => {
  try {
    const data = jwt.verify(token, SECRET_KEY);
    return { error: false, data };
  } catch (error: any) {
    return { error: true, data: { message: error.message } };
  }
};

export default { createToken, verifyToken };

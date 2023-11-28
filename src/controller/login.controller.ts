import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response): Promise<Response | unknown> => {
  const { username, password } = req.body;

  const result = await loginService.login(username, password);

  if (!result) return res.status(401).json({ message: 'Invalide credentials' });

  return res.status(200).json(result);
};

export default { login };

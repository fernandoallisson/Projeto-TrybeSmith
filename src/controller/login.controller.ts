import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response): Promise<Response | unknown> => {
  const { username, password } = req.body;

  const result = await loginService.login(username, password);

  if (result.status === 'BAD_REQUEST') return res.status(400).json({ message: result.message });

  if (result.status === 'INVALID_FIELDS') return res.status(401).json({ message: result.message });

  return res.status(200).json(result);
};

export default { login };

// FUNÇÃO LOGIN TESTADA UNITARIAMENTE
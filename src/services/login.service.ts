import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { createToken, Payload } from '../utils/create-token';

const login = async (username: string, password: string): Promise<Payload | unknown> => {
  const userDb = await UserModel.findOne({ where: { username } });

  if (!userDb || !bcrypt.compareSync(password, userDb.dataValues.password)) {
    return { message: 'Invalid fields' };
  }

  const token = createToken({ id: userDb.dataValues.id, email: userDb.dataValues.username });

  return { token };
};

export default { login };

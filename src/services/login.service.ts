import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import createToken from '../utils/create-token';

type LoginType = {
  status?: string;
  message?: string | undefined;
  token?: string;
};

const login = async (username: string, password: string): Promise<LoginType> => {
  const userDb = await UserModel.findOne({ where: { username } });
  
  if (!userDb || !bcrypt.compareSync(password, userDb.dataValues.password)) {
    return { status: 'INVALID_FIELDS', message: 'Username or password invalid' };
  }

  const token = createToken.createToken({
    id: userDb.dataValues.id, email: userDb.dataValues.username });

  return { token };
};

export default { login };

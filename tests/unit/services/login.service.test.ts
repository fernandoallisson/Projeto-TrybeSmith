import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import bcrypt from 'bcryptjs';
import loginService from '../../../src/services/login.service';
import { userBodyResponseError3 } from '../../mocks/user.mocks';
import UserModel from '../../../src/database/models/user.model';
import loginSchema from '../../../src/schemas/login.schema';

chai.use(sinonChai);

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('loginSchema retorna um erro quando não há username', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    sinon.stub(loginSchema, 'validate').resolves({ error: { message: 'Username or password invalid' } });
    const response = await loginService.login('', '123456');
    
    expect(response.message).to.be.deep.equal('Username or password invalid');
    expect(response.status).to.be.deep.equal('INVALID_FIELDS');
  });
});

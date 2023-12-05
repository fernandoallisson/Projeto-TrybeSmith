import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import bcrypt from 'bcryptjs';
import loginService from '../../../src/services/login.service';
import { userBodyResponse2, token } from '../../mocks/user.mocks';
import UserModel from '../../../src/database/models/user.model';
import createToken from '../../../src/utils/create-token';

chai.use(sinonChai);

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('loginSchema retorna um erro quando não há username', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const response = await loginService.login('', '123456');
    
    expect(response.message).to.be.deep.equal('Username or password invalid');
    expect(response.status).to.be.deep.equal('INVALID_FIELDS');
  });
  it('a função de login retorne um obejto com o token', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userBodyResponse2)
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(createToken, 'createToken').resolves(token);

    await loginService.login('Hagar', 'terrível');

    expect(UserModel.findOne).to.have.been.calledOnce;
  });
});

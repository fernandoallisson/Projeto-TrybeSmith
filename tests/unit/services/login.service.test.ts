import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import loginService from '../../../src/services/login.service';
import {} from '../../mocks/user.mocks';
import UserModel from '../../../src/database/models/user.model';
import loginSchema from '../../../src/schemas/login.schema';

chai.use(sinonChai);

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it.only('loginSchema retorna um erro quando o username é inválido', async function () {
    sinon.stub(loginSchema, 'validate').resolves({ error: true });
    const response = await loginService.login('Hagar', 'lindoooo');
    console.log(response);
    // PARA FAZER AINDA

  });
});

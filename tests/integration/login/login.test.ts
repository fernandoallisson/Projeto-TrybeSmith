import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import statusHTTP from '../../mocks/statusHTTP.mocks';
import { token, userBodyRequest, userBodyRequestError } from '../../mocks/user.mocks';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  // it.only('Retorna um status 200 e um token', async function () {
    
  //   const response = await chai.request(app).post('/login').send(userBodyRequest);
  //   chai.expect(response).to.have.status(statusHTTP.OK);
  //   chai.expect(response.body).to.have.property('token');
  // });

  // it('Retorna um status 401 e uma mensagem de erro', async function () {
  //   const response = await chai.request(app).post('/login').send(userBodyRequestError);
  //   chai.expect(response).to.have.status(statusHTTP.UNAUTHORIZED);
  //   chai.expect(response.body).to.have.property('message');
  // });
});

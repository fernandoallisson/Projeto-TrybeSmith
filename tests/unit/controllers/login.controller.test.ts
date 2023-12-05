import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginController from '../../../src/controller/login.controller';
import loginService from '../../../src/services/login.service';
import {
  token,
  userBodyRequest, 
  userBodyRequestError,
  userBodyResponseError, 
  userBodyResponseError2} from '../../mocks/user.mocks';
import statusHTTP  from '../../mocks/statusHTTP.mocks';


chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa a função login com o status BAD_REQUEST', async function () {
    const response = sinon.stub(loginService, 'login').resolves(userBodyResponseError);
    req.body = userBodyRequestError;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    await loginController.login(req, res);
    expect(response).to.have.been.calledWith(userBodyRequestError.username, userBodyRequestError.password);
    expect(res.status).to.have.been.calledWith(statusHTTP.BAD_REQUEST);
    expect(res.json).to.have.been.calledWith({ message: userBodyResponseError.message });
  });
  it('Testa a função login com o status INVALID_FIELDS', async function () {
    const response = sinon.stub(loginService, 'login').resolves(userBodyResponseError2);
    req.body = userBodyRequestError;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    await loginController.login(req, res);

    chai.expect(response).to.have.been.calledWith(userBodyRequestError.username, userBodyRequestError.password);
    chai.expect(res.status).to.have.been.calledWith(statusHTTP.INVALID_FIELDS);
    chai.expect(res.json).to.have.been.calledWith({ message: userBodyResponseError2.message });
  });
  it('Testa a função login com o status OK', async function () {
    const response = sinon.stub(loginService, 'login').resolves({token});
    req.body = userBodyRequest;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    await loginController.login(req, res);

    chai.expect(res.status).to.have.been.calledWith(statusHTTP.OK);
    chai.expect(res.json).to.have.been.calledWith({ token });
  });
});

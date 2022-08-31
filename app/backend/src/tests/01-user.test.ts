import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import * as mock from './mock'
import UserModel from '../database/models/User.model'
import UserService from '../service/User.service';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
const should = chai.should()

describe('01 - User service', () => {
  before(async () => {
    sinon
      .stub(Example, "findOne")
      .resolves({
        ...mock.userLogin
      } as UserModel);
  });

  after(() => {
    (Example.findOne as sinon.SinonStub).restore();
  })

  it('Verifica se o service se login retorna o token', async () => {
    const service = new UserService()
    const { email, password } = mock.loginInputs
    const result = await service.login(email, password)
    const token = result ? result.token : ''
    expect(token.length > 0).to.be.equal(true)
  });
});

describe('02 - User controller', () => {
  let chaiHttpResponse: Response;
  const service = new UserService()

  before(async () => {
    sinon.stub(service, "login").resolves({ ...mock.serviceLogin });
  });

  after(() => {
    (service.login as sinon.SinonStub).restore();
  })

  it('Verifica se o controller retorna certo', (done) => {
    chai.request(app).post('/login').send(mock.loginInputs).end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('token');
      done()
    })
  });
});

import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import TeamService from '../service/Team.service'

import Teams from '../database/models/Teams.model'
import { app } from '../app';
import Example from '../database/models/ExampleModel';
import * as mock from './mock'
import UserService from '../service/User.service';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
const should = chai.should()

describe('03 - Team service', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se o service de  retorna o todos os times', async () => {
    sinon.stub(Teams, 'findAll').resolves(mock.allTeams as Teams[])
    const service = new TeamService()
    const result = await service.getAll()
    expect(result).to.be.equal(mock.allTeams)
  });

  it('Verifica se o service de team retorna o time pelo id', async () => {
    sinon.stub(Teams, 'findByPk').resolves(mock.team as Teams)
    const service = new TeamService()
    const result = await service.getById(4)
    expect(result).to.be.equal(mock.team)
  });
});


describe('04 - Team controller', () => {
  let chaiHttpResponse: Response;
  const service = new TeamService()

  before(async () => {
    sinon.stub(service, "getById").resolves(mock.team as Teams);
  });

  after(() => {
    (service.getById as sinon.SinonStub).restore();
  })

  it('Verifica se o controller retorna todos os times', (done) => {
    chai.request(app).get('/teams').end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[0].should.have.property('id');
      res.body[0].should.have.property('teamName');
      done()
    })
  });

  it('Verifica se o controller retorna o time pelo id', (done) => {
    chai.request(app).get('/teams/4').end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('id');
      res.body.should.have.property('teamName');
      done()
    })
  });
});


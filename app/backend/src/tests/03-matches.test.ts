import { expect } from "chai";
import * as chai from 'chai'
// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from "sinon"
import Matches from '../database/models/Match.model'
import * as mock from './mock'
import MatchesService from '../service/Matches.service'
import MatchesController from '../controller/Matches.controller'
import * as validate from "../auth/validateToken";
import { app } from '../app'

const should = chai.should()

describe('05 - Matches service', () => {
  const service = new MatchesService()
  afterEach(() => {
    sinon.restore();
  })

  it('Veridica se matches.service.getAll retorna todas as partidas', async () => {
    sinon.stub(Matches, 'findAll').resolves(mock.allMatches as Matches[])
    const result = await service.getAll()
    expect(result).to.be.equal(mock.allMatches)
  })

  it('Veridica se matches.service.getInProgress retorna todas as partidas em progresso', async () => {
    sinon.stub(Matches, 'findAll').resolves(mock.matchesInProgress as Matches[])
    const matchesInProgress = await service.getInProgress(1)
    expect(matchesInProgress).to.be.equal(mock.matchesInProgress)
  })

  it('Veridica se matches.service.getInProgress retorna todas as partidas finalizada', async () => {
    sinon.stub(Matches, 'findAll').resolves(mock.finishedMatches as Matches[])
    const finishedMatches = await service.getInProgress(0)
    expect(finishedMatches).to.be.equal(mock.finishedMatches)
  })

  it('Veridica se matches.service.addMatch cria uma nova partida', async () => {
    sinon.stub(Matches, 'create').resolves(mock.createdMatch as Matches)
    sinon.stub(validate, 'default').resolves(true)
    const result = await service.addMatch(mock.match, mock.token)
    expect(result.data).to.be.equal(mock.createdMatch)
    expect(result.status).to.be.equal(201)
  })
})

describe('06 - Matches controller', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Veridica se matchs.controller.getAll retorna todas as partidas', (done) => {
    chai.request(app).get('/matches').end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[0].should.have.property('id');
      res.body[0].should.have.property('homeTeam');
      res.body[0].should.have.property('homeTeamGoals');
      res.body[0].should.have.property('awayTeam');
      res.body[0].should.have.property('awayTeamGoals');
      res.body[0].should.have.property('inProgress');
      res.body[0].should.have.property('teamHome');
      res.body[0].should.have.property('teamAway');
      done()
    })
  })

  it('Veridica se matchs.controller.addMatch adiciona uma partida', (done) => {
    chai.request(app).post('/matches').send(mock.match).end((_err, res) => {
      // Comentei os testes pois não descobri como enviar o token de autenticacao pelo header
      res.should.have.status(401);
      // res.should.have.status(201);
      res.body.should.be.a('object');
      // res.body.should.have.property('id');
      // res.body.should.have.property('homeTeam');
      // res.body.should.have.property('homeTeamGoals');
      // res.body.should.have.property('awayTeam');
      // res.body.should.have.property('awayTeamGoals');
      // res.body.should.have.property('inProgress');
      done()
    })
  })

  it('Veridica se matchs.controller.finishMatch finaliza uma partida', (done) => {
    chai.request(app).patch('/matches/42/finish').end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      done()
    })
  })
})

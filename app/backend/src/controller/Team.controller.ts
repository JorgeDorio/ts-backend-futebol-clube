import { Request, Response } from 'express';
import TeamService from '../service/Team.service';

class TeamConstroller {
  constructor(private teamService = new TeamService()) { }
  public getAll = async (_req: Request, res: Response) => {
    try {
      const teams = await this.teamService.getAll();
      return res.status(200).json(teams);
    } catch (_e) {
      console.log('Erro em Team.controller');
    }
  };
}

export default TeamConstroller;

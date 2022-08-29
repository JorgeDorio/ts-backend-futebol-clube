import { Request, Response } from 'express';
import MatchesService from '../service/Matches.service';

class MatchesController {
  constructor(private matchesService = new MatchesService()) { }
  public getAll = async (_req: Request, res: Response) => {
    try {
      const matches = await this.matchesService.getAll();
      return res.status(200).json(matches);
    } catch (_e) {
      console.log('Erro em Matches.controller');
    }
  };
}

export default MatchesController;

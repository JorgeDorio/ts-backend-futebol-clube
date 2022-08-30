import { Request, Response } from 'express';
import MatchesService from '../service/Matches.service';

class MatchesController {
  constructor(private matchesService = new MatchesService()) { }
  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (!inProgress) {
      const matches = await this.matchesService.getAll();
      return res.status(200).json(matches);
    }
    const matches = await this.matchesService.getInProgress();
    return res.status(200).json(matches);
  };

  public addMatch = async (req: Request, res: Response) => {
    const { body } = req;
    const { authorization } = req.headers;
    const { status, data } = await this.matchesService.addMatch(body, authorization || '');
    return res.status(status).json(data);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchesService.finishMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchesController;

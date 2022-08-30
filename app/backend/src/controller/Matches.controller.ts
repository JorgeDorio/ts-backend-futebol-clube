import { Request, Response } from 'express';
import MatchesService from '../service/Matches.service';

class MatchesController {
  constructor(private matchesService = new MatchesService()) { }
  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    let matches;
    if (inProgress === undefined) {
      matches = await this.matchesService.getAll();
      return res.status(200).json(matches);
    } if (inProgress === 'true') {
      matches = await this.matchesService.getInProgress(1);
    } else {
      matches = await this.matchesService.getInProgress(0);
    }
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

  public changeMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchesService.changeMatch(req.body, id);
    return res.status(200).json(req.body);
  };
}

export default MatchesController;

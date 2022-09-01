import { Request, Response } from 'express';
import LeaderboardService from '../service/Leaderboard.service';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public generateLeaderBoard = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardService.generateLeaderBoard();
    return res.status(200).json(leaderboard);
  };
}

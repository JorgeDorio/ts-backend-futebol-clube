import { IMatch } from '../interfaces/IMatch';
import Matches from '../database/models/Match.model';
import Teams from '../database/models/Teams.model';
import validateToken from '../auth/validateToken';

class MatchesService {
  public getAll = async () => {
    const include = [
      { model: Teams, as: 'teamHome' },
      { model: Teams, as: 'teamAway' },
    ];
    const matches = await Matches.findAll({ include });
    return matches;
  };

  public getInProgress = async (status: number) => {
    const include = [
      { model: Teams, as: 'teamHome' },
      { model: Teams, as: 'teamAway' },
    ];
    const matches = await Matches.findAll({
      include,
      where: {
        inProgress: status,
      },
    });
    return matches;
  };

  public addMatch = async (data: IMatch, token: string) => {
    const test = data;
    try {
      validateToken(token);
      const awayTeam = await Matches.findByPk(test.awayTeam);
      const homeTeam = await Matches.findByPk(test.homeTeam);
      test.inProgress = 1;
      if (test.homeTeam === test.awayTeam) {
        return {
          status: 401,
          data: { message: 'It is not possible to create a match with two equal teams' },
        };
      } if (homeTeam === null || awayTeam === null) {
        return { status: 404, data: { message: 'There is no team with such id!' } };
      }
      return { status: 201, data: await Matches.create(test) };
    } catch (_e) {
      return { status: 401, data: { "message": "Token must be a valid token" } };
    }
  };

  public finishMatch = async (id: string) => {
    await Matches.update({ inProgress: 0 }, { where: { id } });
  };
}

export default MatchesService;

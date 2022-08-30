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

  public getInProgress = async () => {
    const include = [
      { model: Teams, as: 'teamHome' },
      { model: Teams, as: 'teamAway' },
    ];
    const matches = await Matches.findAll({
      include,
      where: {
        inProgress: '1',
      },
    });
    return matches;
  };

  public addMatch = async (data: IMatch, token: string) => {
    try {
      validateToken(token);
      const test = data;
      test.inProgress = 1;
      if (test.homeTeam !== test.awayTeam) {
        const insert = await Matches.create(test);
        return { status: 201, data: insert };
      }
      return {
        status: 401,
        data: {
          message: 'It is not possible to create a match with two equal teams',
        },
      };
    } catch (_e) {
      return { status: 401, data: { message: 'Unauthorized' } };
    }
  };

  public finishMatch = async (id: string) => {
    await Matches.update({ inProgress: 0 }, { where: { id } });
  };
}

export default MatchesService;

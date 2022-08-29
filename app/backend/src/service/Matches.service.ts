import Matches from '../database/models/Match.model';
import Teams from '../database/models/Teams.model';

class MatchesService {
  public getAll = async () => {
    try {
      const include = [
        { model: Teams, as: 'teamHome' },
        { model: Teams, as: 'teamAway' },
      ];
      const matches = await Matches.findAll({ include });
      return matches;
    } catch (_e) {
      console.log('Erro em Matches.service => getAll');
    }
  };
}

export default MatchesService;

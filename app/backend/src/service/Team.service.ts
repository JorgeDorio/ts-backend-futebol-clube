import Teams from '../database/models/Teams.model';

class TeamService {
  public getAll = async () => {
    try {
      const teams = await Teams.findAll();
      return teams;
    } catch (_e) {
      console.log('Erro em Team.service');
    }
  };

  public getById = async (id: number) => {
    try {
      const team = await Teams.findByPk(id);
      return team;
    } catch (_e) {
      console.log('Erro em Team.model => getById');
    }
  };
}

export default TeamService;

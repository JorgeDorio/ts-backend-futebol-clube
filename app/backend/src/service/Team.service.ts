import Teams from '../database/models/Teams.model';

class TeamService {
  public getAll = async () => {
    const teams = await Teams.findAll();
    return teams;
  };

  public getById = async (id: number) => {
    const team = await Teams.findByPk(id);
    return team;
  };
}

export default TeamService;

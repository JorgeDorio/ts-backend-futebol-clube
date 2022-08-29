import Teams from '../database/models/Teams.model'

class TeamService {
  public getAll = async () => {
    try {
      const teams = Teams.findAll()
      return teams
    } catch (_e) {
      console.log("Erro em Team.service")
    }
  }
}

export default TeamService

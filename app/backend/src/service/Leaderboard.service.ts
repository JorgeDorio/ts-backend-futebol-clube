import Match from '../database/models/Match.model';
import Team from '../database/models/Teams.model';
// src: https://github.com/tryber/sd-019-c-trybe-futebol-clube/pull/137/files#diff-8e00a62c72b9ac3905e75ba63c7d04ef0937319acef7163c8fdff36fc6afe35a
class Leaderboard {
  private leaderBoard: any[];
  private match: typeof Match;
  private team: typeof Team;
  private matches: Match[];
  constructor() {
    this.match = Match;
    this.team = Team;
  }

  private getTeamPoints(id: number) {
    let totalVictories = 0; let totalDraws = 0; let totalLosses = 0; let goalsFavor = 0; let goalsOwn = 0; let totalGames = 0;// eslint-disable-line max-len
    this.matches.forEach((match) => {
      if (match.homeTeam === id) {
        totalGames += 1;
        if (match.homeTeamGoals === match.awayTeamGoals) {
          totalDraws += 1; goalsFavor += match.homeTeamGoals; goalsOwn += match.awayTeamGoals;// eslint-disable-line max-len
        } else if (match.homeTeamGoals > match.awayTeamGoals) {
          totalVictories += 1; goalsFavor += match.homeTeamGoals; goalsOwn += match.awayTeamGoals;// eslint-disable-line max-len
        } else {
          totalLosses += 1; goalsFavor += match.homeTeamGoals; goalsOwn += match.awayTeamGoals;// eslint-disable-line max-len
        }
      }
    });
    const goalsBalance = goalsFavor - goalsOwn; const
      totalPoints = totalVictories * 3 + totalDraws;// eslint-disable-line max-len
    const efficiency = +(totalPoints / (totalGames * 3) * 100).toFixed(2); // eslint-disable-line no-mixed-operators
    return { totalPoints, totalVictories, totalDraws, totalLosses, goalsFavor, goalsOwn, goalsBalance, efficiency }; // eslint-disable-line max-len
  }

  public async generateLeaderBoard() {
    const teams = await this.team.findAll();
    this.matches = await Match.findAll({ where: { inProgress: false } });
    this.leaderBoard = teams.map((team) => ({ name: team.teamName, totalGames: this.matches.filter((match) => match.homeTeam === team.id && match.inProgress === false).length, ...this.getTeamPoints(team.id) }));// eslint-disable-line max-len
    return this.leaderBoard.sort((a, b) => b.totalPoints - a.totalPoints || b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor);// eslint-disable-line max-len
  }
}

export default Leaderboard;

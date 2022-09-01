import { ITeam } from "./ITeam";

export interface IMatch {
  id?: number;
  homeTeam: number | string;
  homeTeamGoals: number;
  awayTeam: number | string;
  awayTeamGoals: number;
  inProgress?: boolean | number;
  teamHome?: ITeam
  teamAway?: ITeam
}

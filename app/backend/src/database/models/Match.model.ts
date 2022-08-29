import { STRING, BOOLEAN, INTEGER, Model } from 'sequelize';
import Teams from './Teams.model';
import db from '.';

class match extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

match.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: STRING,
      allowNull: false,
    },
    homeTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: STRING,
      allowNull: false,
    },
    awayTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

match.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });

match.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(match, { foreignKey: 'homeTeam', as: 'homeMatches' });

Teams.hasMany(match, { foreignKey: 'awayTeam', as: 'awayMatches' });

export default match;

import { NUMBER } from 'sequelize';
import { STRING, Model } from 'sequelize';
import db from '.';

class team extends Model {
  id: number;
  teamName: string;
}

team.init({
  id: {
    type: NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

export default team;

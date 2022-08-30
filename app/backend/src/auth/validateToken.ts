import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const validateToken = (token: string) => {
  const decoded = jwt.verify(token, 'jwt_secret');
  return decoded as IUser;
};

export default validateToken;

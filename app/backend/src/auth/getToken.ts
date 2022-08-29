import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import 'dotenv/config';

const getToken = (user: IUser): string => {
  const { password, id, role } = user;
  // const { password, ...teste } = user;

  // I put the secrect in hard code because when I try to use dotenc, i give this follow error: Argument of type 'string | undefined' is not assignable to parameter of type 'Secret'.
  // const secret = process.env.JWT_SECRET;

  const token = jwt.sign({ password, id, role }, 'jwt_secret', {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export default getToken;

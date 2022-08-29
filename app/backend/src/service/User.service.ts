import * as bcryptjs from 'bcryptjs';
import UserModel from '../database/models/User.model';
import getToken from '../auth/getToken';
import validateToken from '../auth/validateToken'

export class UserService {
  constructor(private userModel = UserModel) { }

  login = async (email: string, pwd: string) => {
    try {
      const userLogin = await this.userModel.findOne({ where: { email } });

      if (!userLogin || !bcryptjs.compare(userLogin.password, pwd)) {
        return false;
      }

      const { password, id, role } = userLogin;
      const token = getToken(userLogin);
      return {
        user: {
          password,
          id,
          role,
        },
        token,
      };
    } catch (_e) {
      console.log('Erro em User.service');
    }
  };
}

export class UserValidateService {
  public validate = (authorization: string) => {
    try {
      const validation = validateToken(authorization)
      return { role: validation?.role }
    } catch (_e) {
      console.log('Errom em User.service => UserValidateService')
    }
  }
}

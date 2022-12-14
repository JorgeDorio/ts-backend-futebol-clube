import * as bcryptjs from 'bcryptjs';
import UserModel from '../database/models/User.model';
import getToken from '../auth/getToken';

class UserService {
  constructor(private userModel = UserModel) { }

  login = async (email: string, pwd: string) => {
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
  };
}

export default UserService;

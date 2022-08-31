import { Request, Response } from 'express';
import UserService from '../service/User.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const login = await this.userService.login(email, password);

    if (!login) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    return res.status(200).json({ token: login.token });
  };
}

export default UserController;

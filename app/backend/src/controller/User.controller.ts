import { NextFunction, Request, Response } from 'express';
import { UserService, UserValidateService } from '../service/User.service';

export class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const login = await this.userService.login(email, password);

      if (!login) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json({ token: login.token });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

export class UserValidate {
  constructor(private userValidateService = new UserValidateService()) { }
  public validate = (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;
      const validation = this.userValidateService.validate(authorization || '')
      return res.status(200).json(validation)
    } catch (_e) {
      console.log("Erro em User.controller => userValidate")
    }
  }
}


import { Request, Response } from 'express';
import TokenService from '../service/Token.service';

class tokenController {
  constructor(private tokenService = new TokenService()) { }
  public validate = (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const validation = this.tokenService.validate(authorization || '');
    return res.status(200).json(validation);
  };
}

export default tokenController;

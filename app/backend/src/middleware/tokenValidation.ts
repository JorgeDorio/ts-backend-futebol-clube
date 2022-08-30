import { NextFunction, Request, Response } from 'express';
import jwt from 'jwt-decode';
import IToken from '../interfaces/IToken';

export default class tokenValidation {
  public validation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (token) {
        const decoded: IToken = jwt(token || '');
        if (decoded.exp && decoded.exp > Math.trunc(Date.now() / 1000)) {
          next();
        }
        return res.status(401).json();
      }
      return res.status(401).json();
    } catch (_e) {
      console.log('Erro em tokenValidation => validation');
      next();
    }
  };
}

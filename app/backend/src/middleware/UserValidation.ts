import { NextFunction, Request, Response } from 'express';

class LoginValidation {
  public static loginInputValidation(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email || !email.length || !password || !password.length) {
        return res.status(400).json({ message: 'All fields must be filled' });
      }
      next();
    } catch (e) {
      console.log(e);
    }
  }
}

export default LoginValidation;

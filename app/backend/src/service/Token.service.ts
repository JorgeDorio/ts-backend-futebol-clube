import validateToken from '../auth/validateToken';

class TokenService {
  public validate = (authorization: string) => {
    try {
      const validation = validateToken(authorization);
      return { role: validation?.role };
    } catch (_e) {
      console.log('Errom em User.service => UserValidateService');
    }
  };
}

export default TokenService;

import validateToken from '../auth/validateToken';

class TokenService {
  public validate = (authorization: string) => {
    const validation = validateToken(authorization);
    return { role: validation?.role };
  };
}

export default TokenService;

import jwt_decode from "jwt-decode";
import { IUser } from '../interfaces/IUser'

const validateToken = (token: string) => {
  try {
    const decoded = jwt_decode(token)
    return decoded as IUser
  } catch (_e) {
    console.log('Erro em auth/validadeToken')
  }
};

export default validateToken

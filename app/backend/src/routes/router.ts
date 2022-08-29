import { Router } from 'express';
import TokenController from '../controller/Token.controller';
import UserController from '../controller/User.controller';
import LoginValidation from '../middleware/UserValidation';

const router = Router();

const userController = new UserController();
const tokenController = new TokenController();

router.get('/login/validate', tokenController.validate);
router.post('/login', LoginValidation.loginInputValidation, userController.login);

export default router;

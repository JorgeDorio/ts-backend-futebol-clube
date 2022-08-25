import { Router } from 'express';
import UserController from '../controller/User.controller';
import LoginValidation from '../middleware/UserValidation';

const router = Router();

const userController = new UserController();

router.post('/login', LoginValidation.loginInputValidation, userController.login);

export default router;

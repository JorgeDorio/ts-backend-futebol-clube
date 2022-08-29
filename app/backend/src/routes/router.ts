import { Router } from 'express';
import { UserController, UserValidate } from '../controller/User.controller';
import LoginValidation from '../middleware/UserValidation';

const router = Router();

const userController = new UserController();
const userValidate = new UserValidate();

router.get('/login/validate', userValidate.validate);
router.post('/login', LoginValidation.loginInputValidation, userController.login);

export default router;

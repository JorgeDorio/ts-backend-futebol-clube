import { Router } from 'express';
import UserController from '../controller/User.controller';

const router = Router();

const userController = new UserController();

router.post('/login', userController.login);

export default router;

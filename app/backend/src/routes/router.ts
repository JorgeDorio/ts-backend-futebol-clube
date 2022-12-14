import { Router } from 'express';
import TeamConstroller from '../controller/Team.controller';
import TokenController from '../controller/Token.controller';
import UserController from '../controller/User.controller';
import LoginValidation from '../middleware/UserValidation';
import MatchesController from '../controller/Matches.controller';
import LeaderboardController from '../controller/Leaderboard.controller';

const router = Router();

const userController = new UserController();
const tokenController = new TokenController();
const teamConstroller = new TeamConstroller();
const matchesController = new MatchesController();
const leaderboardControllera = new LeaderboardController();

router.get('/leaderboard/home', leaderboardControllera.generateLeaderBoard);
router.patch('/matches/:id/finish', matchesController.finishMatch);
router.patch('/matches/:id', matchesController.changeMatch);
router.post('/matches', matchesController.addMatch);
router.get('/matches', matchesController.getAll);
router.get('/teams/:id', teamConstroller.getById);
router.get('/teams', teamConstroller.getAll);
router.get('/login/validate', tokenController.validate);
router.post('/login', LoginValidation.loginInputValidation, userController.login);

export default router;

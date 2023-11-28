import { Router } from 'express';
import loginController from '../controller/login.controller';
import validateLogin from '../middlewares/login-validate';

const loginRouter = Router();

// Adicionar o middleware de autenticação
loginRouter.post('/login', validateLogin, loginController.login);

export default loginRouter;

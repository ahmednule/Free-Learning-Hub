import express from 'express';
import { login, signup, logout, signupWithGoogle } from '../Controllers/Auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);
router.post('/google', signupWithGoogle);

export default router;
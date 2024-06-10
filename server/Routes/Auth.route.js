import express from 'express';
import { login, signup, logout, checkUserEmailVerification } from '../Controllers/Auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);
router.post('/check-email-verification', checkUserEmailVerification);

export default router;

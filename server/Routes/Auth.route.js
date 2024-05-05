import express from 'express';
import { signup } from '../Controllers/Auth.controller.js';

const router = express.Router();

router.post('/login', );
router.post('/signup', signup);
router.post('/logout', );

export default router;
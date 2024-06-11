import express from 'express';
import { registerNewsletter } from '../Controllers/News.controller.js';

const router = express.Router();

router.post('/register', registerNewsletter);

export default router;

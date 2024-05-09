import express from 'express';
import { registerModule, updateProgress, getUserData } from '../Controllers/Learn.controller.js'

const router = express.Router();

router.post('/register', registerModule);
router.post('/update', updateProgress);
router.get('/progress', getUserData);

export default router;
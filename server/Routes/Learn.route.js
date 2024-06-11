import express from 'express';
import { registerModule, updateProgress, getUserProgress } from '../Controllers/Learn.controller.js'

const router = express.Router();

router.post('/register', registerModule);
router.post('/update', updateProgress);
router.post('/progress', getUserProgress);

export default router;

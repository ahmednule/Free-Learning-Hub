import express from 'express';
import { registerModule, updateProgress } from '../Controllers/Learn.controller.js'

const router = express.Router();

router.post('/register', registerModule);
router.post('/update', updateProgress);

export default router;
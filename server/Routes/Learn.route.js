import express from 'express';
import { registerModule } from '../Controllers/Learn.controller.js'

const router = express.Router();

router.post('/register', registerModule);

export default router;
import express from 'express';
import { getCubes } from '../Controllers/User.controller.js';

const router = express.Router();

router.post('/cubes', getCubes);

export default router;

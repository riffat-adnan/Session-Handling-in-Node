import express from 'express';
import { setSession, getSession } from '../controllers/sessionController.js';

const router = express.Router();

router.get('/set-session', setSession);
router.get('/get-session', getSession);

export default router;
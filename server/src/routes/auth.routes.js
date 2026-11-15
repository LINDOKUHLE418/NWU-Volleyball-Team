import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { loginSchema } from '../validators/auth.validator.js';
import * as controller from '../controllers/auth.controller.js';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts. Try again later.' },
});

const router = Router();

router.post('/login', loginLimiter, validate(loginSchema), controller.login);
router.get('/me', requireAdmin, controller.me);

export default router;
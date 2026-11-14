import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { joinRequestLimiter } from '../middleware/rateLimiters.js';
import { createJoinRequestSchema } from '../validators/joinRequest.validator.js';
import * as controller from '../controllers/joinRequest.controller.js';

const router = Router();

// Public: anyone can apply (rate-limited and validated)
router.post(
  '/',
  joinRequestLimiter,
  validate(createJoinRequestSchema),
  controller.createJoinRequest
);

export default router;
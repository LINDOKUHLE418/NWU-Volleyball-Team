import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { validateId } from '../middleware/validateId.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { joinRequestLimiter } from '../middleware/rateLimiters.js';
import {
  createJoinRequestSchema,
  updateStatusSchema,
} from '../validators/joinRequest.validator.js';
import * as controller from '../controllers/joinRequest.controller.js';

const router = Router();

// Public
router.post(
  '/',
  joinRequestLimiter,
  validate(createJoinRequestSchema),
  controller.createJoinRequest
);

// Admin only
router.get('/', requireAdmin, controller.listJoinRequests);
router.get('/stats', requireAdmin, controller.getStats); // must be before /:id
router.get('/:id', requireAdmin, validateId, controller.getJoinRequest);
router.patch(
  '/:id',
  requireAdmin,
  validateId,
  validate(updateStatusSchema),
  controller.updateStatus
);
router.delete('/:id', requireAdmin, validateId, controller.removeJoinRequest);

export default router;
import rateLimit from 'express-rate-limit';

export const joinRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,                // 10 submissions per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many submissions. Please try again later.' },
});
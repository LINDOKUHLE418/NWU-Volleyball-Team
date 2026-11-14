import { z } from 'zod';

export const POSITIONS = [
  'Setter',
  'Outside Hitter',
  'Opposite Hitter',
  'Middle Blocker',
  'Libero',
  'Not sure yet',
];

export const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export const STATUSES = ['pending', 'contacted', 'approved', 'rejected'];

export const createJoinRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name is too short')
    .max(100, 'Full name is too long')
    .regex(/^[\p{L}\s'.-]+$/u, 'Full name contains invalid characters'),
  studentNumber: z
    .string()
    .trim()
    .regex(/^\d{8}$/, 'Student number must be 8 digits'),
  email: z.string().trim().toLowerCase().email('Invalid email address').max(255),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^(\+27|0)\d{9}$/, 'Enter a valid South African phone number'),
  position: z.enum(POSITIONS, { message: 'Invalid position' }),
  experienceLevel: z.enum(EXPERIENCE_LEVELS, { message: 'Invalid experience level' }),
});

export const updateStatusSchema = z.object({
  status: z.enum(STATUSES, { message: 'Invalid status' }),
});
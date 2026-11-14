import * as joinRequestService from '../services/joinRequest.service.js';

export async function createJoinRequest(req, res) {
  try {
    const created = await joinRequestService.createJoinRequest(req.body);
    return res.status(201).json({
      message: 'Join request submitted successfully',
      data: created,
    });
  } catch (error) {
    // 23505 = PostgreSQL "unique violation" (student number already used)
    if (error.code === '23505') {
      return res.status(409).json({
        message: 'An application with this student number already exists',
      });
    }
    throw error; // anything else goes to the global error handler
  }
}
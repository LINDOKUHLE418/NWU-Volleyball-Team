import * as joinRequestService from '../services/joinRequest.service.js';

export async function createJoinRequest(req, res) {
  try {
    const created = await joinRequestService.createJoinRequest(req.body);
    return res.status(201).json({
      message: 'Join request submitted successfully',
      data: created,
    });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({
        message: 'An application with this student number already exists',
      });
    }
    throw error;
  }
}

export async function listJoinRequests(req, res) {
  const { status } = req.query;
  const data = await joinRequestService.getAllJoinRequests(status);
  res.json({ data });
}

export async function getStats(req, res) {
  const stats = await joinRequestService.getJoinRequestStats();
  res.json({ data: stats });
}

export async function getJoinRequest(req, res) {
  const item = await joinRequestService.getJoinRequestById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Join request not found' });
  res.json({ data: item });
}

export async function updateStatus(req, res) {
  const item = await joinRequestService.updateJoinRequestStatus(
    req.params.id,
    req.body.status
  );
  if (!item) return res.status(404).json({ message: 'Join request not found' });
  res.json({ data: item });
}

export async function removeJoinRequest(req, res) {
  const deleted = await joinRequestService.deleteJoinRequest(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Join request not found' });
  res.status(204).send();
}
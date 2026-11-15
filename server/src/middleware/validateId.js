export function validateId(req, res, next) {
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid id' });
  }
  next();
}
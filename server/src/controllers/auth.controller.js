import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db/pool.js';

// Hash used to keep response time similar when the email doesn't exist
const DUMMY_HASH = '$2b$12$C6UzMDM.H6dfI/f/IKcEeO5Bf5pVQ9aXJ6mG7Z0h5h6yQ0yZ1hJ2e';

export async function login(req, res) {
  const { email, password } = req.body;

  const { rows } = await pool.query(
    'SELECT id, email, password_hash FROM admins WHERE email = $1',
    [email]
  );
  const admin = rows[0];

  const valid = await bcrypt.compare(password, admin ? admin.password_hash : DUMMY_HASH);

  if (!admin || !valid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { sub: admin.id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
  );

  res.json({ token, admin: { id: admin.id, email: admin.email } });
}

export function me(req, res) {
  res.json({ admin: req.admin });
}
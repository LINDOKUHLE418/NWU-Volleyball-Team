import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool } from './pool.js';

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env first');
  process.exit(1);
}
if (password.length < 10) {
  console.error('ADMIN_PASSWORD must be at least 10 characters');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

await pool.query(
  `INSERT INTO admins (email, password_hash)
   VALUES ($1, $2)
   ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
  [email.toLowerCase(), hash]
);

console.log(`Admin ready: ${email}`);
await pool.end();
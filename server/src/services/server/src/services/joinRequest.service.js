import { pool } from '../db/pool.js';

const COLUMNS = `
  id,
  full_name        AS "fullName",
  student_number   AS "studentNumber",
  email,
  phone_number     AS "phoneNumber",
  position,
  experience_level AS "experienceLevel",
  status,
  created_at       AS "createdAt",
  updated_at       AS "updatedAt"
`;

export async function createJoinRequest(data) {
  const { rows } = await pool.query(
    `INSERT INTO join_requests
       (full_name, student_number, email, phone_number, position, experience_level)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, created_at AS "createdAt"`,
    [
      data.fullName,
      data.studentNumber,
      data.email,
      data.phoneNumber,
      data.position,
      data.experienceLevel,
    ]
  );
  return rows[0];
}

export async function getAllJoinRequests(status) {
  if (status) {
    const { rows } = await pool.query(
      `SELECT ${COLUMNS} FROM join_requests WHERE status = $1 ORDER BY created_at DESC`,
      [status]
    );
    return rows;
  }
  const { rows } = await pool.query(
    `SELECT ${COLUMNS} FROM join_requests ORDER BY created_at DESC`
  );
  return rows;
}

export async function getJoinRequestById(id) {
  const { rows } = await pool.query(
    `SELECT ${COLUMNS} FROM join_requests WHERE id = $1`,
    [id]
  );
  return rows[0] || null;
}

export async function updateJoinRequestStatus(id, status) {
  const { rows } = await pool.query(
    `UPDATE join_requests
        SET status = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING ${COLUMNS}`,
    [status, id]
  );
  return rows[0] || null;
}

export async function deleteJoinRequest(id) {
  const { rowCount } = await pool.query(
    'DELETE FROM join_requests WHERE id = $1',
    [id]
  );
  return rowCount > 0;
}

export async function getJoinRequestStats() {
  const { rows } = await pool.query(
    `SELECT
       COUNT(*)::int                                        AS total,
       COUNT(*) FILTER (WHERE status = 'pending')::int      AS pending,
       COUNT(*) FILTER (WHERE status = 'contacted')::int    AS contacted,
       COUNT(*) FILTER (WHERE status = 'approved')::int     AS approved,
       COUNT(*) FILTER (WHERE status = 'rejected')::int     AS rejected
     FROM join_requests`
  );
  return rows[0];
}
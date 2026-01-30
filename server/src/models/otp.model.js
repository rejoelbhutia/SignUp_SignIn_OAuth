
import db from "../config/db.js";



const OTPModel = {
  create: async (email, otp_code, expiresAt, type) => {
 

    const [result] = await db.query(
      `INSERT INTO otps (email, otp_code, expires_at, type)
       VALUES (?, ?, ?, ?)`,
      [email, otp_code, expiresAt, type]
    );

    return result.insertId;
  },

  verify: async (email, otp_code, type) => {
    

    const [rows] = await db.query(
      `SELECT id FROM otps
       WHERE email = ?
       AND otp_code = ?
       AND type = ?
       AND expires_at > NOW()
       ORDER BY id DESC
       LIMIT 1`,
      [email, otp_code, type]
    );

    if (!rows.length) return false;

    await db.query(`DELETE FROM otps WHERE id = ?`, [rows[0].id]);

    return true;
  },

  deleteByEmail: async (email) => {
    const [result] = await db.query(
      `DELETE FROM otps WHERE email = ?`,
      [email]
    );

    return result.affectedRows;
  }
};

export { OTPModel };

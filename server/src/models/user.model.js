// models/User.js
import db from "../config/db.js";

const User = {
  // 1. Find by Email
  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM user WHERE email = ?", 
      [email],
    );
    return rows[0];
  },

  // 2. Find by Google ID
  findByGoogleId: async (googleId) => {
    const [rows] = await db.query("SELECT * FROM user WHERE google_id = ?", [
      googleId,
    ]);
    return rows[0];
  },

  // 3. Find by ID
  findById: async (id) => {
    const [rows] = await db.query("SELECT id, name, email, created_at FROM user WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  // 4. Create User
  create: async (userData) => {
    const { name, email, password, google_id } = userData;
    
    const [result] = await db.query(
      "INSERT INTO user (name, email, password, google_id) VALUES (?, ?, ?, ?)",
      [name, email, password || null, google_id || null]
    );

    return { id: result.insertId, name, email, google_id };
  },

  // 5. Update user password
  updatePassword: async (id, hashedPassword) => {
    await db.query(
      "UPDATE user SET password = ? WHERE id = ?",
      [hashedPassword, id]
    );
  }
};

export default User;
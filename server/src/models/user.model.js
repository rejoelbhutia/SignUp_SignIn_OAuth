import db from "./db.js"

const User = {
    // 1. Find by Email
    findByEmail: async (email) => {
        const [rows] = await db.query("SELECT * FROM user WHERE email = ?", [email]);
        return rows[0];
    },

    // 2. NEW: Find by Google ID 
    findByGoogleId: async (googleId) => {
        const [rows] = await db.query("SELECT * FROM user WHERE google_id = ?", [googleId]);
        return rows[0];
    },

    // 3. Create User 
   
    create: async (userData) => {
        const { fullname, email, password, google_id } = userData;

        const [result] = await db.query(
            "INSERT INTO user (fullname, email, password, google_id) VALUES (?, ?, ?, ?)",
            [fullname, email, password || null, google_id || null] 
            
        );

        return { id: result.insertId, ...userData };
    }
};

export default User;
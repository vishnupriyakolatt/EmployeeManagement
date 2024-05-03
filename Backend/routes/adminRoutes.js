import express from 'express';
import db from '../config/conn.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    const [rows] = await db.query(sql, [email, password]);

    if (rows.length > 0) {
      const email = rows[0].email;
      const secretKey = "adminsecret"; 
      const token = jwt.sign({ role: "admin", email: email }, secretKey, { expiresIn: "1d" });

      res.cookie('token', token, { httpOnly: true, secure: true });
      return res.json({ loginStatus: true });
    } else {
      return res.status(401).json({ loginStatus: false, error: "Incorrect email or password." });
    }
  } catch (err) {
    console.error("Database query error:", err);
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
});


export { router as adminRoutes };

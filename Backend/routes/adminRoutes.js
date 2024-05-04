import express from "express";
import db from "../config/conn.js";
import jwt from "jsonwebtoken";
import Transporter from '../config/mailer.js'
const router = express.Router();
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    const [rows] = await db.query(sql, [email, password]);


    if (rows.length > 0) {
      const email = rows[0].email;
      const secretKey = "adminsecret";
      const token = jwt.sign({ role: "admin", email: email }, secretKey, {
        expiresIn: "1d",
      });

      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ loginStatus: true });
    } else {
      return res
        .status(401)
        .json({ loginStatus: false, error: "Incorrect email or password." });
    }
  } catch (err) {
    console.error("Database query error:", err);
    return res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
});

router.get("/allemploye", async (req, res) => {
  try {
    const q = "SELECT * FROM employedetails";
    const [data] = await db.query(q);
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/addemploye", async (req, res) => {
  console.log("Add employee");
  console.log(req.body);

  try {
    const empcodeExists = await checkEmpcodeExists(req.body.empcode);
    if (empcodeExists) {
      return res.status(400).json({ error: "Employee with the same empcode already exists" });
    }

    const OTP = generateOTP();
    
    const mailDetails = {
      from: "vishnupriyakolatt@gmail.com",
      to: req.body.email, // Assuming req.body.email contains the employee's email address
      subject: "Greetings from Teamwork. Your email and password is",
      html: `<p>Your login password is ${OTP}</p>`,
    };

    // Send OTP email
    await Transporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send OTP email" });
      } else {
        console.log("OTP mailed successfully");
        // Save employee data with OTP as password
        saveEmployee(req.body, OTP)
          .then(() => {
            res.status(200).json({ msg: "Employee added successfully" });
          })
          .catch((error) => {
            console.error("Error saving employee:", error);
            res.status(500).json({ error: "Failed to save employee data" });
          });
      }
    });
  } catch (error) {
    console.error("Error in adding employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

async function saveEmployee(data, password) {
  const sql =
    "INSERT INTO employedetails (`firstname`, `lastname`, `empcode`, `email`, `contactno`, `department`, `empimage`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    data.firstname,
    data.lastname,
    data.empcode,
    data.email,
    data.contactno,
    data.department,
    data.empimage,
    password, // Use OTP as the password
  ];

  await db.query(sql, values);
}

async function checkEmpcodeExists(empcode) {
  const sql = "SELECT COUNT(*) AS count FROM employedetails WHERE empcode = ?";
  const [rows] = await db.query(sql, [empcode]);
  return rows[0].count > 0;
}
router.delete("/employe/:id", async (req, res) => {
  console.log("delete employe");
  const empid = req.params.id;
  const q = "DELETE FROM employedetails WHERE empid=?";
  
  try {
    const result = await new Promise((resolve, reject) => {
      db.query(q, [empid], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    console.log('data:', result);
    return res.json("Employee has been deleted successfully");
  } catch (error) {
    console.error('Error deleting employee:', error);
    return res.status(500).json({ error: 'Error deleting employee' });
  }
});


router.put("/employe/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  const empid = req.params.id;
  const q =
    "UPDATE employedetails SET `firstname`=?, `lastname`=?,  `contactno`=?, `department`=?, `empimage`=? WHERE empid=?";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.contactno,
    req.body.department,
    req.body.empimage,
    req.params.id
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Employee details have been updated");
  });
});


export { router as adminRoutes };

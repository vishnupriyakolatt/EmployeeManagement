import db from "../config/conn.js";
import jwt from "jsonwebtoken";
import  Transporter from '../config/mailer.js'
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

export const Adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    const [rows] = await db.query(sql, [email, password]);

    if (rows.length > 0) {
      const userEmail = rows[0].email;
      const secretKey = "adminsecret";

      const token = jwt.sign({ email: userEmail }, secretKey, {
        expiresIn: "1d",
      });

      console.log(token);
      return res.json({ loginStatus: true, token: token });
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
};

export const Allemploye=async (req, res) => {
    try {
      const q = "SELECT * FROM employedetails";
      const [data] = await db.query(q);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  }
  


  export const addemploye=async (req, res) => {
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


    await Transporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send OTP email" });
      } else {
        console.log("OTP mailed successfully");
      
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
};

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
    'https://cdn.vectorstock.com/i/500p/81/63/default-avatar-photo-placeholder-icon-grey-vector-38508163.jpg', 
    password,
  ];

  await db.query(sql, values);
}


async function checkEmpcodeExists(empcode) {
  const sql = "SELECT COUNT(*) AS count FROM employedetails WHERE empcode = ?";
  const [rows] = await db.query(sql, [empcode]);
  return rows[0].count > 0;
}




export const employedelete = async (req, res) => {
  try {
  console.log("delete employe");
  const empid = req.params.id;
  const q = "DELETE FROM employedetails WHERE empid=?";
  

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
}


  export const singleview = async (req, res) => {
    try {
      const empid = req.params.id;
  
 
      const sql = `SELECT * FROM employedetails WHERE empid = ?`;
  
  
      const [result] = await db.query(sql, [empid]);
  
      if (result.length > 0) {
        res.status(200).json(result[0]);
        console.log(result[0]);
      } else {

        res.status(404).send('Employee not found');
      }
    } catch (err) {
 
      console.error('Error fetching employee:', err);
      res.status(500).send('Error fetching employee data');
    }
  };
  




  export const update = async (req, res) => {
    try {
      const empid = req.params.id;
      if (!empid) {
        return res.status(400).json({ error: 'Employee ID is required' });
      }
  
      const q =
        "UPDATE employedetails SET `firstname`=?, `lastname`=?, `contactno`=?, `department`=?, `empimage`=?, `password`=? WHERE empid=?";
      const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.contactno,
        req.body.department,
        req.body.empimage,
        req.body.password,
        req.params.id
      ];
  
      const [result] = await db.query(q, values);
  
      console.log('Updated data:', result);
      return res.status(200).json({ message: 'Employee updated successfully', data: result });
    } catch (err) {
      console.error('Error in update:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  



  export const employelogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const sql = "SELECT * FROM employedetails WHERE email = ? AND password = ?";
      const [rows] = await db.query(sql, [email, password]);
  
      if (rows.length > 0) {
        const userEmail = rows[0].email;
        const secretKey = "employesecret";
  
        const token = jwt.sign({ email: userEmail }, secretKey, {
          expiresIn: "1d",
        });
  
        console.log(token);
        return res.json({ loginStatus: true, token: token });
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
  };



  export const profile = async (req, res) => {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({ error: 'Invalid token.' });
      }
  
      const userId = req.user.id;
      const sql = "SELECT * FROM employedetails WHERE id = ?";
      const [rows] = await db.query(sql, [userId]);
  
  
      if (rows.length > 0) {
        const user = rows[0];
        return res.json(user);
   
      } else {
        return res.status(404).json({ error: 'User not found.' });
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
      return res.status(500).json({ error: 'An error occurred. Please try again later.' });
    }
  };
  


export const updateprofile=async (req, res) => {
  try {
    const userId = req.user.id; 
    const { firstname, lastname, empcode, contactno, department, password, empimage, email } = req.body;

    const sql = "UPDATE employedetails SET firstname = ?, lastname = ?, empcode = ?, contactno = ?, department = ?, password = ?, empimage = ?, email = ? WHERE id = ?";
    const result = await db.query(sql, [firstname, lastname, empcode, contactno, department, password, empimage, email, userId]);

    if (result.affectedRows > 0) {
      return res.json({ message: 'Profile updated successfully.' });
    } else {
      return res.status(404).json({ error: 'User not found or no changes made.' });
    }
  } catch (err) {
    console.error('Error updating user profile:', err);
    return res.status(500).json({ error: 'An error occurred. Please try again later.' });
  }
 }





import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NodeMailer_Mail,
      pass: process.env.NodeMailer_Pass,
    },
  });
export default transporter;

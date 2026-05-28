import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },

  connectionTimeout: 10000,  // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

  

export default transporter;

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default resend;
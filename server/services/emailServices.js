import transporter from "../config/mail.js";

export const sendVerificationEmail = async (
  email,
  token
) => {
  const verificationLink =
    `${process.env.CLIENT_URL}/verify-email/${token}`;

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASSWORD);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: `
      <h2>Email Verification</h2>

      <p>
        Click the button below to verify your email.
      </p>

      <a href="${verificationLink}">
        Verify Email
      </a>
    `,
  });
};

// second test

// utils/sendVerificationEmail.js
// import resend from "../config/mail.js";

// export const sendVerificationEmail = async (email, token) => {
//   const verificationLink = `${process.env.CLIENT_URL}/verify-email/${token}`;

//   console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Verify Your Email",
//     html: `
//       <h2>Email Verification</h2>
//       <p>Click the button below to verify your email.</p>
//       <a href="${verificationLink}">Verify Email</a>
//     `,
//   });
// };

// 3rd test
// import { Resend } from "resend";

// export const sendVerificationEmail = async (email, token) => {
//   const resend = new Resend(process.env.RESEND_API_KEY);
  
//   const verificationLink = `${process.env.CLIENT_URL}/verify-email/${token}`;

//   const { data, error } = await Promise.race([
//     resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: email,
//       subject: "Verify Your Email",
//       html: `
//         <h2>Email Verification</h2>
//         <p>Click the button below to verify your email.</p>
//         <a href="${verificationLink}">Verify Email</a>
//       `,
//     }),
//     new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Email timeout after 10s")), 10000)
//     ),
//   ]);

//   console.log("data:", data);
//   console.log("error:", error);
// };

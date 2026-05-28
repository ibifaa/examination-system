
import { hashPassword, comparePassword } from '../utils/password.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import prisma from '../prisma/client.js';
import { generateVerificationToken, generateTokenExpiry } from '../services/tokenServices.js';
import crypto from "crypto";
import { sendVerificationEmail } from '../services/emailServices.js';
// import sendVeri



// // REGISTER
// const register = async (req, res) => {

//   try {
//     const { username, email, password, role } = req.body;

  


//     const normalizedEmail = email?.trim().toLowerCase();

//     if (!normalizedEmail || !password) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const existingUser = await prisma.user.findUnique({
//       where: {
//         email: normalizedEmail,
//       },
//     });

  

//     if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }


 
//     const hashedPassword =  await hashPassword(password);

  

//   const user = await prisma.user.create({
//     data: {
//       username,
//       email: normalizedEmail,
//       password: hashedPassword,
//       role
//     },
//   });

//     // remove old tokens
//     await prisma.emailVerificationToken.deleteMany({
//       where: {
//         userId: user.id,
//       },
//     });


//     const hashedToken = crypto
//   .createHash("sha256")
//   .update(generateTokenExpiry)
//   .digest("hex");

// console.log(hashedToken);
//      // save token
//     await prisma.emailVerificationToken.create({
//       data: {
//         token:hashPassword,
//         expiresAt: generateTokenExpiry,
//         userId: user.id,
//       },
//     });


//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Server error',
//     error:err.message });
//   }
// };

// const register = async (req, res) => {

//  try {
//     const { username, email, password, role } = req.body;

//   const normalizedEmail =
//     email.trim().toLowerCase();

//   // existing user
//   const existingUser =
//     await prisma.user.findUnique({
//       where: {
//         email: normalizedEmail,
//       },
//     });

 

//   if (existingUser) {
//     throw new Error(
//       "User already exists"
//     );
//   }

//   // hash password
//   const hashedPassword =
//     await hashPassword(password);

//   // create user
//   const user =
//     await prisma.user.create({
//       data: {
//         email: normalizedEmail,
//         password: hashedPassword,
//         role:"user",
//          ... (username ? { username } : {}),
       
//       },
//     });

//   // delete old tokens
//   await prisma.emailVerificationToken.deleteMany({
//     where: {
//       userId: user.id,
//     },
//   });

//   // raw token
//   const rawToken =
//     generateVerificationToken();
//     console.log(rawToken)

//   // hashed token
//   const hashedToken = crypto
//     .createHash("sha256")
//     .update(rawToken)
//     .digest("hex");

  

//   // expiry
//   const expiresAt =
//     generateTokenExpiry();

//   // save token
//   await prisma.emailVerificationToken.create({
//     data: {
//       token: hashedToken,
//       expiresAt,
//       userId: user.id,
//     },
//   });

//   // send email
//   await sendVerificationEmail(
//     user.email,
//     rawToken
//   );

//   return {
//     success: true,
//     message:
//       "Registration successful. Verify your email.",
//   };
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Server error',
//     error:err.message });
//   }
// };

// LOGIN


// const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (!user) {
//     return res.status(400).json({ message: "Invalid credentials" });
//   }

//   const isMatch = await comparePassword(password, user.password);


//   if (!isMatch) {
//     return res.status(400).json({ message: "Invalid credentials" });
//   }

//   if (!user.isVerified) {
//   return res.status(401).json({
//     success: false,
//     message: "Please verify your email",
//   });
// }

//   const token = jwt.sign(
//     { id: user.id, email: user.email },
//     process.env.SECRET,
//     { expiresIn: "15m" }
//   );

//   res.json({ token });
// };

const login = async (req, res) => {
const { email, password } = req.body;


  const normalizedEmail =
    email.trim().toLowerCase();

  const user =
    await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

  if (!user) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const isMatch =
    await comparePassword(
      password,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Invalid credentials"
    );
  }

  // verify email
  if (!user.isVerified) {
    throw new Error(
      "Please verify your email"
    );
  }

  // jwt token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.SECRET,
    {
      expiresIn: "15m",
    }
  );

  return {
    success: true,
    token,
  };
};




const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const normalizedEmail = email.trim().toLowerCase();

    // existing user
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" }); // ← return response directly
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // create user
    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        password: hashedPassword,
        role: "user",
        ...(username ? { username } : {}),
      },
    });

    // delete old tokens
    await prisma.emailVerificationToken.deleteMany({
      where: { userId: user.id },
    });

    // raw token
    const rawToken = generateVerificationToken();

    // hashed token
    const hashedToken = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    // expiry
    const expiresAt = generateTokenExpiry();

    // save token
    await prisma.emailVerificationToken.create({
      data: {
        token: hashedToken,
        expiresAt,
        userId: user.id,
      },
    });

    // send email
    await sendVerificationEmail(user.email, rawToken);

    return res.status(201).json({  // ← actually send the response
      success: true,
      message: "Registration successful. Verify your email.",
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
export default {login, register}
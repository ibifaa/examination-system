import 'dotenv/config';
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import prisma from './prisma/client.js';
// import { userController } from './controllers/userController.js';
import userRoutes from "./routes/userRoutes.js"

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


prisma.$connect()
  .then(() => {
    console.log('✅ Database connected');

    app.listen(4000, () => {
      console.log('🚀 Server is running on port 4000');
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });
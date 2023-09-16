import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRouter from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
import usersRoute from './routes/users.js';
import { verifyAdmin } from './middleware/verifyToken.js';
import { verifyToken } from './middleware/verifyToken.js';
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Load environment variables from .env file
dotenv.config();

app.use(cookieParser());

// Logging middleware
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", verifyToken,verifyAdmin,hotelsRouter);
app.use("/api/rooms", verifyToken,verifyAdmin,roomsRoute);


const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error('MongoDB connection string is missing in environment variables.');
    }
    
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
    
    // Start your server or other operations that depend on successful database connection
    // app.listen(...);
    app.listen(8000, () => {
      console.log("connected to port 8000");
    });

    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle the error or rethrow it
    throw error;
  }
};
connect();







import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { loginAuth, registerAuth, qouteAuth } from './authentication/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.URI;

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Ensure cors() is executed

// Connecting to Database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Protected quote route
app.get('/quote', qouteAuth);

// User signup
app.post('/api/user/signup', registerAuth); // Added '/' before api

// User login
app.post('/api/user/login', loginAuth); // Added '/' before api

// App listening on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

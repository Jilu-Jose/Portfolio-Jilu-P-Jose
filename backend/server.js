import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.js';
import modelsRoutes from './routes/models.js';
import contactRoutes from './routes/contact.js';
import mongoose from 'mongoose';

dotenv.config();

// MongoDB Connection
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Successfully connected to MongoDB via Mongoose'))
        .catch((error) => console.error('MongoDB connection error:', error));
} else {
    console.warn("Warning: MONGO_URI is not defined in .env! Database connection skipped.");
}

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: ["https://portfolio-jilu-p-jose.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/models', modelsRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

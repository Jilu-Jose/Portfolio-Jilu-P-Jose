import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.js';
import modelsRoutes from './routes/models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/models', modelsRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

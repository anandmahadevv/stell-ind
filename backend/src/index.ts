import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

import authRoutes from './routes/auth';

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Routes will be added here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MachiLink Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

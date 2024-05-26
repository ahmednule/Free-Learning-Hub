import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './Routes/Auth.route.js';
import learnRoutes from './Routes/Learn.route.js';
import newsRoute from './Routes/News.route.js';
import userRoutes from './Routes/User.route.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// USED OR USEFULL ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/learn', learnRoutes);
app.use('/api/news', newsRoute);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Hub is relaxing on port ${PORT}`);
});

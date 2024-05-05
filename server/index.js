import express from 'express';
import cors from 'cors';

import authRoutes from './Routes/Auth.route.js'

const app = express();
app.use(cors());
app.use(express.json());

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Hub relaxing on port 3000!');
});

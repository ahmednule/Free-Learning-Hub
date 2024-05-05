const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Hub relaxing on port 3000!');
});
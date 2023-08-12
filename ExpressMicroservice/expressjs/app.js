const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express.js server is running!');
});

app.listen(port, () => {
  console.log(`Express.js server is listening at http://localhost:${port}`);
});
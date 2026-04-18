const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res) => {
  res.send('welcomee!!');
});

// Simple GET endpoint
app.get('/hello', (req, res) => {
  res.send('Hello from Day 2 server!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

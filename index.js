const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('This is API running on port 3000');
});

app.get('/api', (req, res) => {
  res.send('This is about API');
});

module.exports = app;

// For testing purposes
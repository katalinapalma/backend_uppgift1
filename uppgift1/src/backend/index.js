const express = require('express');
const app = express();
// const router = express.Router();

// environment variable PORT or 3000 if unset
// change by executing 'export PORT=2000' in bash before starting
// const port = process.env.PORT || 3000;
const port = 3000;

app.get('/api', (req, res) => {
  res.send({'Hello': 'World'});
});

app.get('/api/test', (req, res) => {
  res.send([1, 2, 3, 4]);
});

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});
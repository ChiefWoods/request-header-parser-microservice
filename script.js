const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname));

app.get('/api/whoami', (req, res) => {
  const obj = {
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  };

  res.json(obj);
});

app.listen(3000, () => {
  console.log('Your app is listening on port 3000');
});

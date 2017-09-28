const express = require('express');
const path = require('path');
const apiHelpers = require('./apiHelpers.js');
const app = express();

app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/photos/', (req, res) => {
  apiHelpers.getInstagramPhotos(data => {
    if (!data) {
      return res.status(500).send({ error: 'Something failed in server.js!' });
    }
    res.send(data);
  });
});

app.listen('8000', () => {
  console.log('Listening on port 8000');
});
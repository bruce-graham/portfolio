const express = require('express');
const app = express();
const apiHelpers = require('./apiHelpers.js');

app.use(express.static('public'));

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
const express = require('express');
const fs = require('node:fs');
const app = express();
app.get('/', (req, res) => {
  const filePath = __dirname + '/index.html';
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.sendFile(filePath);
    }
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
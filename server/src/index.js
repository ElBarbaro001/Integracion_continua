'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8090;
const HOST = 'localhost';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Proyecto INTEGRACION CONTINUA GIT + Docker + Jenkins  + AZURE'
  };
  res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
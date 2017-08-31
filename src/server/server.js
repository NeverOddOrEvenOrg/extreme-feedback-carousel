'use strict';

const express = require('express');
const path = require('path');

const dashboards = require('./config/dashboards');

var app = express();

app.use('/public', express.static(path.join(__dirname, '../../public')))

app.route('/').get((req, res) => {
  const index = path.join(__dirname, '..', 'client', 'views', 'index.html');
  res.sendFile(index);
});

app.route('/api/v1/dashboards').get((req, res) => {
  res.json(dashboards);
});

module.exports = app;


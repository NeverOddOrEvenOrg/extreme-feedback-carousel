'use strict';

const path = require('path');
const fs = require('fs');

const configuredDashboardsFile = path.join(__dirname, '../../..', 'local/dashboards.json');

module.exports = JSON.parse(fs.readFileSync(configuredDashboardsFile, 'utf8'));

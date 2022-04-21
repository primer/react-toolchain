// If there is a .primer-scripts/storybook-config.js file present at the root of the repo,
// use that config, otherwise use the default config

const fs = require('fs');
const path = require('path');
const defaultConfig = require('./default-config');

let config;

const possibleLocation = path.resolve(__dirname, '../../../../', '.primer-scripts/storybook-main.js');

if (fs.existsSync(possibleLocation)) config = require(possibleLocation);
else config = defaultConfig;

module.exports = config;

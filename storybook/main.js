// If there is a .primer-scripts/storybook-config.js file present at the root of the repo,
// use that config, otherwise use the default config

const fs = require('fs');
const path = require('path');
const defaultConfig = require('./default-config');
const pkgDir = require('pkg-dir');

let config;

const root = pkgDir.sync();
const possibleLocation = path.resolve(root, '.primer-scripts/storybook-main.js');

if (fs.existsSync(possibleLocation)) config = require(possibleLocation);
else config = defaultConfig;

// convert relative glob path to absolute
// we need to do this because this config file is deep inside node_modules
config.stories = config.stories.map((glob) => path.resolve(root, glob));

module.exports = config;

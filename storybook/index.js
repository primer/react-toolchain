const fs = require('fs');
const path = require('path');
const execa = require('execa');
const pkgDir = require('pkg-dir');

const root = pkgDir.sync();
const options = { env: { FORCE_COLOR: 'true' } };

const defaultStorybookDir = __dirname;
const customStorybookDir = path.resolve(root, './.storybook');

let storybookDir;
if (fs.existsSync(customStorybookDir)) storybookDir = customStorybookDir;
else storybookDir = defaultStorybookDir;

const flags = `-p 6006 --config-dir ${storybookDir} --quiet --no-manager-cache`;
const subprocess = execa('start-storybook', flags.split(' '), options);
subprocess.stdout.pipe(process.stdout);
subprocess.stderr.pipe(process.stderr);

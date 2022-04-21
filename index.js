#!/usr/bin/env node

const path = require('path');
const execa = require('execa');
const options = { env: { FORCE_COLOR: 'true' } };

const storybookDir = path.resolve(__dirname, './storybook');
const flags = `-p 6006 --config-dir ${storybookDir}`;

const subprocess = execa('start-storybook', flags.split(' '), options);
subprocess.stdout.pipe(process.stdout);
subprocess.stderr.pipe(process.stderr);

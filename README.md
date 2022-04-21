<p align="center">
  <img src="https://octodex.github.com/images/manufacturetocat.png" height="200px"/>
  <br><br>
  <b>Toolchain to help build React components with Primer</b>
  <br><br>
  <img src="https://img.shields.io/badge/maturity-proof--of--concept-d85151?style=flat-square"/>
</p>

&nbsp;

### Setup

```
npm install @primer/react-scripts --save-dev
```

#### Storybook

Add this script to your `package.json`:

```diff
{
  scripts: {
    "start": "webpack",
    "test": "jest",
+   "storybook": "prc storybook"
  }
}
```

To customize storybook config, create a file at `.primer-scripts/storybook-main.js`

```js
// example for memex:
const defaultConfig = require('@primer/react-scripts/storybook/default-config');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // extend default config
  ...defaultConfig,

  // need to customise webpack config because we use custom resolvers for helpers/util
  webpackFinal: (webpackConfig) => {
    webpackConfig.resolve.plugins = [new TsconfigPathsPlugin({ baseUrl: './src/client' })];
    return config;
  }
};
```

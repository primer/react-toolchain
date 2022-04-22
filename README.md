<p align="center">
  <img src="https://octodex.github.com/images/manufacturetocat.png" height="200px"/>
  <br><br>
  <b>Toolchain to help build React components with Primer</b>
  <br><br>
  <img src="https://img.shields.io/badge/maturity-proof--of--concept-d85151?style=flat-square"/>
</p>

&nbsp;

### Requirements

- webpack 5+

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

If you need to customize your storybook config, create `.storybook` directory in the root of your repository with the following files:

1. `main.js`

   ```js
   const defaultConfig = require('@primer/react-scripts/storybook/main');
   const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

   module.exports = {
     // extend default config
     ...defaultConfig,

     // remember to include default properties while extending
     addons: [...defaultConfig.addons, 'storybook-addon-performance/register'],

     // need to customise webpack config because we use custom resolvers for helpers/util
     webpackFinal: (webpackConfig) => {
       webpackConfig.resolve.plugins = [new TsconfigPathsPlugin({ baseUrl: './src/client' })];
       return config;
     }
   };
   ```

2. `preview.js`

```js
// step 1: export defaults
export * from '@primer/react-scripts/storybook/preview';

// step 2: customise and overwrite
import { decorators } from '@primer/react-scripts/storybook/preview';
import { withPerformance } from 'storybook-addon-performance';

decorators.push(withPerformance);
export { decorators };
```

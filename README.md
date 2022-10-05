<p align="center">
  <img src="https://octodex.github.com/images/manufacturetocat.png" height="200px"/>
  <br><br>
  <b>Toolchain to help build React components with Primer</b>
  <br><br>
  <img src="https://img.shields.io/badge/maturity-proof--of--concept-d85151?style=flat-square"/>
  <img src="https://img.shields.io/github/package-json/v/primer/react-toolchain?style=flat-square"/>
</p>

&nbsp;

### Requirements

- webpack 5+

&nbsp;

## Setup

```
npm install @primer/react-toolchain --save-dev
```

### Storybook

Step 1. Add this script to your `package.json`:

```diff
{
  scripts: {
    "start": "webpack",
    "test": "jest",
+   "storybook": "toolchain storybook",
+   "storybook:build": "toolchain storybook:build"
  }
}
```

Step 2. Create a `ComponentName.stories.tsx` file

We recommend putting this file next to the component.

```jsx
import { DatePicker } from './date-picker';

export default {
  title: 'Common components/Datepicker'
};

export const SimpleDatePicker = () => {
  return <DatePicker variant="single" value={new Date()} />;
};
```

[Learn more about stories from the Storybook docs](https://storybook.js.org/docs/react/get-started/whats-a-story)

&nbsp;

You're good to go! Run `npm run storybook`.

<details>
  <summary><h4>Customise storybook</h4></summary>

If you need to customize your storybook config, create `.storybook` directory in the root of your repository with the following files:

1. `main.js`

   ```js
   const defaultConfig = require('@primer/react-toolchain/storybook/main');
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
   export * from '@primer/react-toolchain/storybook/preview';

   // (optional) step 2: customise and overwrite
   import { decorators } from '@primer/react-toolchain/storybook/preview';
   import { withPerformance } from 'storybook-addon-performance';

   decorators.push(withPerformance);
   export { decorators };
   ```

   </details>

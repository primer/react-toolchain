const pkgDir = require('pkg-dir');
const path = require('path');

const root = pkgDir.sync();

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: {
      // do we need to support webpack 4? (dotcom & memex use webpack 5)
      name: 'webpack5',
      options: { lazyCompilation: true, fsCache: true }
    }
  },
  // temporarily disabled storyStoreV7, need to test before turning back on
  // features: {storyStoreV7: true}, // required for lazyCompilation

  // convert relative glob path to absolute
  // we need to do this because this config file is deep inside node_modules
  stories: ['./**/*.stories.@(js|jsx|ts|tsx)', './**/*.mdx'].map((glob) => path.resolve(root, glob)),

  // add common addons
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } }
  ]
};

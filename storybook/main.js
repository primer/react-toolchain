const pkgDir = require('pkg-dir');
const glob = require('glob');
const path = require('path');
const commonPath = require('common-path');

const root = pkgDir.sync();

// performance optimisation: only get directories that contain .stories and .mdx files
// this helps speed up storybook's compilation by parsing fewer files
const getStoryPaths = () => {
  const pattern = '**/*.stories.@(js|jsx|ts|tsx)';
  const stories = glob.sync(pattern, {
    root,
    ignore: ['**/node_modules/**', 'lib-esm/**', 'lib/**', 'dist/**']
  });

  const { commonDir } = commonPath(stories);
  return [commonDir + '/' + pattern, commonDir + '/**/*.mdx'];
};

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
  stories: getStoryPaths().map((glob) => path.resolve(root, glob)),

  // add common addons
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-performance/register',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } }
  ]
};

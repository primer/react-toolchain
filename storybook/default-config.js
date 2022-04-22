module.exports = {
  core: {
    builder: {
      // do we need to support webpack 4? (dotcom & memex use webpack 5)
      name: 'webpack5',
      options: { lazyCompilation: true, fsCache: true }
    }
  },
  features: { storyStoreV7: true }, // required for lazyCompilation

  // look through entire repo for *.stories.ts files
  // might be slow, need to test
  // this path is relative to the root of the application
  stories: ['./**/*.stories.@(js|jsx|ts|tsx)', './**/*.mdx'],

  // add common addons
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } }
  ]
};

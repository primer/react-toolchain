module.exports = {
  // need to mention this for webpack 5, storybook default is webpack 4
  // do we need to support webpack 4? (dotcom & memex use webpack 5)
  core: {
    builder: {
      name: 'webpack5',
      options: { lazyCompilation: true, fsCache: true }
    }
  },

  // look through entire repo for *.stories.ts files
  // might be slow, need to test
  // this path is relative to the root of the application
  stories: ['./**/*.stories.@(js|jsx|ts|tsx)'],

  // todo: add common addons. devs can customise and add custom addons
  addons: []
};

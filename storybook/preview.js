import { addons } from '@storybook/addons';
import { withThemeProvider, toolbarTypes } from '@primer/react/lib-esm/utils/story-helpers';
import { withPerformance } from 'storybook-addon-performance';

export const globalTypes = toolbarTypes;
export const decorators = [withThemeProvider, withPerformance];

addons.setConfig({
  // Some stories may set up keyboard event handlers, which can be interfered
  // with by these keyboard shortcuts.
  enableShortcuts: false
});

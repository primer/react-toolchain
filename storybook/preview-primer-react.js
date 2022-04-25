/**
 * This preview.js is only for primer/react.
 * It includes a subset of preview.js, everything except
 * imports from @primer/react because we want to use the
 * dev version for that.
 * See primer/react/.storybook/preview for more info
 */

import { addons } from '@storybook/addons';
import { withPerformance } from 'storybook-addon-performance';

export const decorators = [withPerformance];

addons.setConfig({
  // Some stories may set up keyboard event handlers, which can be interfered
  // with by these keyboard shortcuts.
  enableShortcuts: false
});

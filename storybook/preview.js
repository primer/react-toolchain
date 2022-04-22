import { withThemeProvider, toolbarTypes } from '@primer/react/lib-esm/utils/story-helpers';
import { withPerformance } from 'storybook-addon-performance';

export const globalTypes = toolbarTypes;
export const decorators = [withThemeProvider, withPerformance];

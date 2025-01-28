import type {Preview} from '@storybook/react';

import {Theme} from '../../src/app/providers/ThemeProvider';
import {ThemeDecorator} from '../../src/shared/config/storybook//ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.NORMAL), RouterDecorator],
};

export default preview;

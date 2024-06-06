import React from 'react';
import type { Preview } from '@storybook/react';
import { NextUIProvider } from '@nextui-org/react';
import '../src/styles.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    )
  ],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered'
  }
};

export default preview;

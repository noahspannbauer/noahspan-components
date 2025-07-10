import type { Preview } from '@storybook/react';
import '../src/styles.css';

const preview: Preview = {
  decorators: [(Story) => <Story />],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#FFFFFF'
        },
        {
          name: 'light',
          value: '#f8fafc'
        }
      ]
    },
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

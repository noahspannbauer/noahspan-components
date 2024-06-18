import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const New: Story = {
  args: {
    items: [
      {
        name: 'Link 1',
        url: '#'
      },
      {
        name: 'Link 2',
        url: '#'
      }
    ],
    size: '2000px'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'padded'
  }
};

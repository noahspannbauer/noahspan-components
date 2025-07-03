import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Circular: Story = {
  args: {
    src: '/avatar.png',
    imgProps: {
      height: 40,
      width: 40
    }
  }
};

export const Rounded: Story = {
  args: {
    src: '/avatar.png',
    radius: 'lg'
  }
};

export const Square: Story = {
  args: {
    src: '/avatar.png',
    radius: 'sm'
  }
};

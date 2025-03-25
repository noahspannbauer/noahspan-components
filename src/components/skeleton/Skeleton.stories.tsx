import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  args: {
    height: 40,
    width: 40,
    variant: 'circular'
  }
};

export const Rectangular: Story = {
  args: {
    height: 60,
    width: 210,
    variant: 'rectangular'
  }
};

export const Rounded: Story = {
  args: {
    height: 60,
    width: 210,
    variant: 'rounded'
  }
};

export const Text: Story = {
  args: {
    sx: {
      fontSize: '2rem'
    },
    variant: 'text',
    width: 200
  }
};

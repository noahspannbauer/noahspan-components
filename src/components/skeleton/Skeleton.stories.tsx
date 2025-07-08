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
    className: 'rounded-full w-24 h-24'
  }
};

export const Rectangular: Story = {
  args: {
    className: 'h-24 w-24 rounded-lg'
  }
};

export const Text: Story = {
  args: {
    className: 'h-3 w-24 rounded-lg'
  }
};

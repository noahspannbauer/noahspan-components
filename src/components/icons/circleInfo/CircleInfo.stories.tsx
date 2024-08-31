import type { Meta, StoryObj } from '@storybook/react';
import { CircleInfoIcon } from './CircleInfo';

const meta: Meta<typeof CircleInfoIcon> = {
  title: 'Components/Icons/CircleInfo',
  component: CircleInfoIcon
} satisfies Meta<typeof CircleInfoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

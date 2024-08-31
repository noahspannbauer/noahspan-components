import type { Meta, StoryObj } from '@storybook/react';
import { CircleCheckIcon } from './CircleCheck';

const meta: Meta<typeof CircleCheckIcon> = {
  title: 'Components/Icons/CircleCheck',
  component: CircleCheckIcon
} satisfies Meta<typeof CircleCheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

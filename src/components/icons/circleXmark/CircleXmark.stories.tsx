import type { Meta, StoryObj } from '@storybook/react';
import { CircleXmarkIcon } from './CircleXmark';

const meta: Meta<typeof CircleXmarkIcon> = {
  title: 'Components/Icons/CircleXmark',
  component: CircleXmarkIcon
} satisfies Meta<typeof CircleXmarkIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { PenIcon } from './Pen';

const meta: Meta<typeof PenIcon> = {
  title: 'Components/Icons/Pen',
  component: PenIcon
} satisfies Meta<typeof PenIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

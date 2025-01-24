import type { Meta, StoryObj } from '@storybook/react';
import { GearIcon } from './GearIcon';

const meta: Meta<typeof GearIcon> = {
  title: 'Components/Icons/Eye',
  component: GearIcon
} satisfies Meta<typeof GearIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

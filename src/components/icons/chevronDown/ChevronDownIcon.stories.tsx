import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDownIcon } from './ChevronDownIcon';

const meta: Meta<typeof ChevronDownIcon> = {
  title: 'Components/Icons/ChevronDownIcon',
  component: ChevronDownIcon
} satisfies Meta<typeof ChevronDownIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

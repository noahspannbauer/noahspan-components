import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from './ChevronDown';

const meta: Meta<typeof ChevronDown> = {
  title: 'Components/Icons/ChevronDown',
  component: ChevronDown
} satisfies Meta<typeof ChevronDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

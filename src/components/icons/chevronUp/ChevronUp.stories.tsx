import type { Meta, StoryObj } from '@storybook/react';
import { ChevronUp } from './ChevronUp';

const meta: Meta<typeof ChevronUp> = {
  title: 'Components/Icons/ChevronUp',
  component: ChevronUp
} satisfies Meta<typeof ChevronUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

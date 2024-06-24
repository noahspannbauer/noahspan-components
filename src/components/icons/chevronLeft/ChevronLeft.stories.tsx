import type { Meta, StoryObj } from '@storybook/react';
import { ChevronLeft } from './ChevronLeft';

const meta: Meta<typeof ChevronLeft> = {
  title: 'Components/Icons/ChevronLeft',
  component: ChevronLeft
} satisfies Meta<typeof ChevronLeft>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

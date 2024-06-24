import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from './ChevronRight';

const meta: Meta<typeof ChevronRight> = {
  title: 'Components/Icons/ChevronRight',
  component: ChevronRight
} satisfies Meta<typeof ChevronRight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

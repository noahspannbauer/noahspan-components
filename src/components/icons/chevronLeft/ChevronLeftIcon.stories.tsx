import type { Meta, StoryObj } from '@storybook/react';
import { ChevronLeftIcon } from './ChevronLeftIcon';

const meta: Meta<typeof ChevronLeftIcon> = {
  title: 'Components/Icons/ChevronLeftIcon',
  component: ChevronLeftIcon
} satisfies Meta<typeof ChevronLeftIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

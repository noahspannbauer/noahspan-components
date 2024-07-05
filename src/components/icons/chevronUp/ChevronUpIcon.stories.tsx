import type { Meta, StoryObj } from '@storybook/react';
import { ChevronUpIcon } from './ChevronUpIcon';

const meta: Meta<typeof ChevronUpIcon> = {
  title: 'Components/Icons/ChevronUpIcon',
  component: ChevronUpIcon
} satisfies Meta<typeof ChevronUpIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

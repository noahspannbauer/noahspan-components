import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon } from './ChevronRightIcon';

const meta: Meta<typeof ChevronRightIcon> = {
  title: 'Components/Icons/ChevronRightIcon',
  component: ChevronRightIcon
} satisfies Meta<typeof ChevronRightIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

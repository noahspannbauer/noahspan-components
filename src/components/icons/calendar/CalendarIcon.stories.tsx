import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon } from './CalendarIcon';

const meta: Meta<typeof CalendarIcon> = {
  title: 'Components/Icons/CalendarIcon',
  component: CalendarIcon
} satisfies Meta<typeof CalendarIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

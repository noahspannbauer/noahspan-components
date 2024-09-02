import type { Meta, StoryObj } from '@storybook/react';
import { EllipsisVerticalIcon } from './EllipsisVertical';

const meta: Meta<typeof EllipsisVerticalIcon> = {
  title: 'Components/Icons/EllipsisVertical',
  component: EllipsisVerticalIcon
} satisfies Meta<typeof EllipsisVerticalIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

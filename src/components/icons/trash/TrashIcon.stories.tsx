import type { Meta, StoryObj } from '@storybook/react';
import { TrashIcon } from './TrashIcon';

const meta: Meta<typeof TrashIcon> = {
  title: 'Components/Icons/TrashIcon',
  component: TrashIcon
} satisfies Meta<typeof TrashIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

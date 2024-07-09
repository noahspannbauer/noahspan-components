import type { Meta, StoryObj } from '@storybook/react';
import { EditIcon } from './EditIcon';

const meta: Meta<typeof EditIcon> = {
  title: 'Components/Icons/PlusIcon',
  component: EditIcon
} satisfies Meta<typeof EditIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

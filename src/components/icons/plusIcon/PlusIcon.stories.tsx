import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from './PlusIcon';

const meta: Meta<typeof PlusIcon> = {
  title: 'Components/Icons/PlusIcon',
  component: PlusIcon
} satisfies Meta<typeof PlusIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { UserTieIcon } from './UserTieIcon';

const meta: Meta<typeof UserTieIcon> = {
  title: 'Components/Icons/UserTie',
  component: UserTieIcon
} satisfies Meta<typeof UserTieIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

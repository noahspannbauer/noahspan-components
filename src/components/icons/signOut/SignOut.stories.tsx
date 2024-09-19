import type { Meta, StoryObj } from '@storybook/react';
import { SignOutIcon } from './SignOut';

const meta: Meta<typeof SignOutIcon> = {
  title: 'Components/Icons/SignOut',
  component: SignOutIcon
} satisfies Meta<typeof SignOutIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

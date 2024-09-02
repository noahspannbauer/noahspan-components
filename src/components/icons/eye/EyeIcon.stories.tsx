import type { Meta, StoryObj } from '@storybook/react';
import { EyeIcon } from './EyeIcon';

const meta: Meta<typeof EyeIcon> = {
  title: 'Components/Icons/Eye',
  component: EyeIcon
} satisfies Meta<typeof EyeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

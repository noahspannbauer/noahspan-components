import type { Meta, StoryObj } from '@storybook/react';
import { PlaneIcon } from './PlaneIcon';

const meta: Meta<typeof PlaneIcon> = {
  title: 'Components/Icons/PlaneIcon',
  component: PlaneIcon
} satisfies Meta<typeof PlaneIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { SaveIcon } from './SaveIcon';

const meta: Meta<typeof SaveIcon> = {
  title: 'Components/Icons/PlaneIcon',
  component: SaveIcon
} satisfies Meta<typeof SaveIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

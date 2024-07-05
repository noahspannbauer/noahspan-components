import type { Meta, StoryObj } from '@storybook/react';
import { XmarkIcon } from './XmarkIcon';

const meta: Meta<typeof XmarkIcon> = {
  title: 'Components/Icons/XmarkIcon',
  component: XmarkIcon
} satisfies Meta<typeof XmarkIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { Plane } from './Plane';

const meta: Meta<typeof Plane> = {
  title: 'Components/Plane',
  component: Plane
} satisfies Meta<typeof Plane>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

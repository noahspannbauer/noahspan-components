import type { Meta, StoryObj } from '@storybook/react';
import { TriangleExclamationIcon } from './TriangleExclamation';

const meta: Meta<typeof TriangleExclamationIcon> = {
  title: 'Components/Icons/TriangleExclamation',
  component: TriangleExclamationIcon
} satisfies Meta<typeof TriangleExclamationIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

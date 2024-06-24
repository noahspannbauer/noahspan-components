import type { Meta, StoryObj } from '@storybook/react';
import { PuzzlePiece } from './PuzzlePiece';

const meta: Meta<typeof PuzzlePiece> = {
  title: 'Components/Icons/PuzzlePiece',
  component: PuzzlePiece
} satisfies Meta<typeof PuzzlePiece>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

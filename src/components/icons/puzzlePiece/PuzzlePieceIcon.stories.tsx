import type { Meta, StoryObj } from '@storybook/react';
import { PuzzlePieceIcon } from './PuzzlePieceIcon';

const meta: Meta<typeof PuzzlePieceIcon> = {
  title: 'Components/Icons/PuzzlePieceIcon',
  component: PuzzlePieceIcon
} satisfies Meta<typeof PuzzlePieceIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: '2xl'
  }
};

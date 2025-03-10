import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const ExtraSmall: Story = {
//   args: {
//     size: 'xs'
//   }
// };

// export const Small: Story = {
//   args: {
//     size: 'sm'
//   }
// };

// export const Medium: Story = {
//   args: {
//     size: 'md'
//   }
// };

// export const Large: Story = {
//   args: {
//     size: 'lg'
//   }
// };

// export const ExtraLarge: Story = {
//   args: {
//     size: 'xl'
//   }
// };

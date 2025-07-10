import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter the amount'
  }
};

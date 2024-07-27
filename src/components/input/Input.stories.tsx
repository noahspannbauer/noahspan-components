import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    placeholder: 'Outlined'
  }
};

export const Standard: Story = {
  args: {
    label: 'Standard',
    placeholder: 'Standard',
    variant: 'standard'
  }
};

export const Static: Story = {
  args: {
    label: 'Static',
    placeholder: 'Static',
    variant: 'static'
  }
};

export const Error: Story = {
  args: {
    label: 'Error',
    placeholder: 'Error',
    error: true,
    helperText: 'Invalid value'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: 'This is an info alert',
    intent: 'info'
  }
};

export const Warning: Story = {
  args: {
    children: 'This is a warning alert',
    intent: 'warning'
  }
};

export const Error: Story = {
  args: {
    children: 'This is an error alert',
    intent: 'error'
  }
};

export const Success: Story = {
  args: {
    children: 'This is a success alert',
    intent: 'success'
  }
};
